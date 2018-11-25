import * as React from 'react';
import { TextField } from 'ui/Input/index';
import { Button } from 'ui/Button/index';
import { subscribeStateChange, styled, redirectPage } from 'infrastructure';
import EventManager from 'EventManager';
import Constant from '../../constants';
import getLoginStatus from '../../proxy/getLoginStatus';

const LoginWrapper = styled('div')`
    box-shadow: 0 10px 20px rgba(38,50,56,.15);
    border-radius: 3px;
    background-color: #fff;
`;

const LoginField = styled('div')`
    padding: 20px 40px;
    padding-bottom: 40px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`;

const LoginTitle = styled('h2')`
    color: ${(props: any)=> props.theme.color}
    font-size: ${(props: any)=>props.theme.h1Size};
    text-align: center;
    text-transform: uppercase;
    padding-top:20px;
`;

const LoginButton = styled(Button)`
    && { 
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100%;
        background: ${(props: any)=> props.theme.button.backgroundColor};
        text-transform: uppercase;
    }
    && span{
        color: yellow;
    }
`;

interface LoginFormProps {
    handleLogin: Function,
    loginResult: any,
}

class LoginForm extends React.Component<LoginFormProps,any> {
    constructor(props: LoginFormProps){
        super(props);
        this.state = {
            email: '',
            password: '',
            onProcess: false,
        }
        
        this.onchangeEmail = this.onchangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.lockLoginButton = this.lockLoginButton.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.loginResult = this.loginResult.bind(this);

        EventManager.addEventListener(Constant.loginResult, this.loginResult);
    }

    loginResult(event: any, params: any){
        this.isProcessing = false;

        if (params.isSuccess){
            EventManager.dispatch(Constant.loginSuccess, this, params);
        } else {
            this.setState({
                onProcess: false,
                emailError: params.errorInfo.email,
                passwordError: params.errorInfo.password,
            });
        }
    }

    redirectToHomePage(props: any) {
        if (props.loginResult.isLogin === true) {
            redirectPage('/');
        }
    }

    onchangeEmail(event: any) {
        this.setState({
            email: event.target.value,
            onProcess: false,
            emailError: '',
        })
    }

    onChangePassword(event: any) {
        this.setState({
            password: event.target.value,
            passwordError: '',
            onProcess: false,
        })
    }

    lockLoginButton(){
        setTimeout(function(){
            this.setState({
                onProcess: true,
            });
        }.bind(this),200);
    }

    onLogin(){
        if (this.isProcessing) return;

        this.isProcessing = true;
        this.lockLoginButton();
        const params = {
            email: this.state.email,
            password: this.state.password
        }
        
        EventManager.dispatch(Constant.loginForm, this, params);
    }

    componentWillReceiveProps(nextProps: any){
        console.log(nextProps);
        this.redirectToHomePage(nextProps);
    }

    render() {
        return (
            <LoginWrapper>
                <LoginTitle> PLEASE SIGN UP OR SIGN IN </LoginTitle>
                <LoginField> 
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        value={this.state.email}
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        error = {this.state.emailError? true: false}
                        helperText={this.state.emailError}
                        onChange={this.onchangeEmail}
                    />
                   
                   <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        name="password"
                        margin="normal"
                        variant="outlined"
                        error = {this.state.passwordError? true: false}
                        helperText={this.state.passwordError}
                        onChange={this.onChangePassword}
                    />
                </LoginField>
                <LoginButton  disabled={this.state.onProcess} onClick={this.onLogin}>
                    {this.state.onProcess? 'PROCESSING': 'CONTINUE'}
                </LoginButton>

            </LoginWrapper>
        )
    }

    private isProcessing = false;
};

const mapStateToProps = (state: any) => { 
    const loginResult = getLoginStatus(state);
    return {
        loginResult,
    };
};

export default subscribeStateChange(mapStateToProps)(LoginForm);
