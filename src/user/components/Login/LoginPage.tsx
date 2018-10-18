import * as React from 'react';
import login from '../../interact/login';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import Logo from './Logo';

const LoginPageWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    background-color: #eceff1;
    height: 100vh;
`;

interface LoginPageProps {
    handleLogin: Function,
}


class LoginPage extends React.Component<LoginPageProps, any> {
    constructor(props: LoginPageProps){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(username: string, password: string) {

    }

    render() {
        return (
            <LoginPageWrapper>
                <Logo/>
                <LoginForm handleLogin={this.onLogin}/>
            </LoginPageWrapper>
        )
    }
};

/*const mapStateToProps = (state: any) => { 
    const activeTheme = getActiveTheme(state);
    const supportThemes = getListThemes(state);
    return {
        activeTheme,
        supportThemes,
    };
};*/

export default LoginPage;