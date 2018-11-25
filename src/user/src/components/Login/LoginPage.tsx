import * as React from 'react';
import login from '../../interact/login';
import LoginForm from './LoginForm';
import { styled, redirectPage } from 'infrastructure';
import { Logo } from 'coreModule/src';

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
}


class LoginPage extends React.Component<LoginPageProps> {
    constructor(props: LoginPageProps){
        super(props);
    }
    
    render() {
        return (
            <LoginPageWrapper>
                <Logo/>
                <LoginForm />
            </LoginPageWrapper>
        )
    }
};

export default LoginPage;