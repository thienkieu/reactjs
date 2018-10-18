import * as React from 'react';
import styled from 'styled-components';
import { TextField } from 'ui/Input/index';
import { Button } from 'ui/Button/index';

import login from '../../interact/login';
import isLogin from '../../proxy/isLogin';
import redirectToHome from '../../proxy/redirectToHome';
import { connect } from 'infrastructure/redux/index';

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
    loginStatus: boolean,
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
        if (props.loginStatus === true) {
            redirectToHome();
        }
    }

    onchangeEmail(event: any) {
        this.setState({
            email: event.target.value,
        })
    }

    onChangePassword(event: any) {
        this.setState({
            password: event.target.value,
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
        login(this.state.email, this.state.password);
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
                        onChange={this.onChangePassword}
                    />
                </LoginField>
                <LoginButton innerRef={this.button} disabled={this.state.onProcess} onClick={this.onLogin}> Continue </LoginButton>
            </LoginWrapper>
        )
    }

    private button = React.createRef<any>();
};

const mapStateToProps = (state: any) => { 
    const loginStatus = isLogin(state);
    return {
        loginStatus,
    };
};

export default connect(mapStateToProps)(LoginForm);