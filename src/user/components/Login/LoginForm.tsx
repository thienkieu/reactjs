import * as React from 'react';
import styled from 'styled-components';
import { TextField } from 'ui/Input/index';
import { Button } from 'ui/Button/index';
import { connect } from 'infrastructure/redux/index';

import login from '../../interact/login';
import redirectToHome from '../../proxy/redirectToHome';
import getLoginResult from '../../proxy/getLoginResult';
import updateLoginResult from '../../proxy/updateLoginResult';

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
        
        this.redirectToHomePage(this.props);
    }

    redirectToHomePage(props: any) {
        if (props.loginResult.isLogin === true) {
            redirectToHome();
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
            emailPasword: '',
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
        if (this.button.current.isRunning) return;

        this.button.current.isRunning = true;
        this.lockLoginButton();
        const params = {
            email: this.state.email,
            password: this.state.password
        }
        
        const handlerResponse  = async function(data: any) {
            const result = await login(data);
            this.button.current.isRunning = false;
            
            if (result.isSuccess){
                updateLoginResult(result);
            } else {
                this.setState({
                    onProcess: false,
                    emailError: result.errorInfo.email,
                    passwordError: result.errorInfo.password,
                });
            }
            
            
        }.bind(this);
        handlerResponse(params);
    }

    componentWillReceiveProps(nextProps: any){
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
                <LoginButton  disabled={this.state.onProcess} innerRef={this.button} onClick={this.onLogin}> Continue </LoginButton>
            </LoginWrapper>
        )
    }

    private button = React.createRef<any>();
};

const mapStateToProps = (state: any) => { 
    const loginResult = getLoginResult(state);
    return {
        loginResult,
    };
};

export default connect(mapStateToProps)(LoginForm);