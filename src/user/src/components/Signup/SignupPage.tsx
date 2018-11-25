import * as React from 'react';
import Signup from '../../interact/Signup';
import SignupForm from './SignupForm';
import { styled, redirectPage } from 'infrastructure';
import { Logo } from 'coreModule/src';

const SignupPageWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    background-color: #eceff1;
    height: 100vh;
`;

interface SignupPageProps {
}


class SignupPage extends React.Component<SignupPageProps> {
    constructor(props: SignupPageProps){
        super(props);
    }
    
    render() {
        return (
            <SignupPageWrapper>
                <Logo/>
                <SignupForm />
            </SignupPageWrapper>
        )
    }
};

export default SignupPage;