import * as React from 'react';
import { TextField } from 'ui/Input/index';
import { Button } from 'ui/Button/index';
import { subscribeStateChange, styled, redirectPage } from 'infrastructure';
import EventManager from 'EventManager';
import Constant from '../../constants';
import getSignupStatus from '../../proxy/getSignupStatus';
import { SnackbarContent } from 'ui/Snackbar';
import { IconButton, CloseIcon, CheckCircleIcon } from 'ui/Icon';

const SignupWrapper = styled('div')`
    box-shadow: 0 10px 20px rgba(38,50,56,.15);
    border-radius: 3px;
    background-color: #fff;
`;

const SignupField = styled('div')`
    padding: 20px 40px;
    padding-bottom: 40px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`;

const SignupTitle = styled('h2')`
    color: ${(props: any)=> props.theme.color}
    font-size: ${(props: any)=>props.theme.h1Size};
    text-align: center;
    text-transform: uppercase;
    padding-top:20px;
`;

const SignupButton = styled(Button)`
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

const SnackbarContentWrap = styled(SnackbarContent)`
    && {
        background-color: green;
    }
`;

const CheckCircleIconWrap = styled(CheckCircleIcon)`
    && {
        padding-left: 20;
    }
`;

interface SignupFormProps {
    handleSignup: Function,
    signupResult: any,
}

interface HiddenAutoProp {
    children: any,
    timeHidden: any,
}

class HiddenAuto extends React.PureComponent<HiddenAutoProp>{
    
    componentDidMount() {
        setTimeout(function(){
            this.displayChildren = false;
            this.setState({
                display: false,
            });
        }.bind(this), this.props.timeHidden);
    }

    render() {
        if (this.displayChildren) return this.props.children;
        return false;
    }

    private displayChildren = true;

}
class SignupForm extends React.Component<SignupFormProps,any> {
    constructor(props: SignupFormProps){
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            onProcess: false,
        }
        
        this.onchangeEmail = this.onchangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.lockSignupButton = this.lockSignupButton.bind(this);
        this.onSignup = this.onSignup.bind(this);
        this.signupResult = this.signupResult.bind(this);

        EventManager.addEventListener(Constant.signupResult, this.signupResult);
    }

    signupResult(event: any, params: any){
        this.isProcessing = false;

        if (params.isSuccess){
            EventManager.dispatch(Constant.signupSuccess, this, params);
        } else {
            this.setState({
                onProcess: false,
                emailError: params.errorInfo.email,
                passwordError: params.errorInfo.password,
                confirmPasswordError: params.errorInfo.confirmPassword,
            });
        }
    }

    redirectToHomePage(props: any) {
        if (props.signupResult.isSignup === true) {
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

    onChangeConfirmPassword(event: any) {
        this.setState({
            confirmPassword: event.target.value,
            confirmPasswordError: '',
            onProcess: false,
        })
    }

    lockSignupButton(){
        setTimeout(function(){
            this.setState({
                onProcess: true,
            });
        }.bind(this),200);
    }

    onSignup(){
        if (this.isProcessing) return;

        this.isProcessing = true;
        this.lockSignupButton();
        const params = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }
        
        EventManager.dispatch(Constant.signupForm, this, params);
    }

    componentWillReceiveProps(nextProps: any){
        console.log(nextProps);
        this.redirectToHomePage(nextProps);
    }

    render() {
        const action = (
            <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                >
                <CloseIcon />
            </IconButton>
        );
        const message= (
            <span id="client-snackbar" >
                <CheckCircleIconWrap />
                This message for client
            </span>
        );

        return (
            <SignupWrapper>
                <SignupTitle> PLEASE SIGN UP NEW ACCOUNT </SignupTitle>
                <HiddenAuto timeHidden={5000}>
                    <SnackbarContentWrap message={message} action={action} />
                </HiddenAuto>

                <SignupField> 
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
                    <TextField
                        id="outlined-confirm-password-input"
                        label="Confirm Password"
                        type="password"
                        value={this.state.confirmPassword}
                        name="confirm-password"
                        margin="normal"
                        variant="outlined"
                        error = {this.state.ConfirmPasswordError? true: false}
                        helperText={this.state.confirmPasswordError}
                        onChange={this.onChangeConfirmPassword}
                    />
                </SignupField>
                <SignupButton  disabled={this.state.onProcess} onClick={this.onSignup}>
                    {this.state.onProcess? 'PROCESSING': 'CONTINUE'}
                </SignupButton>

            </SignupWrapper>
        )
    }

    private isProcessing = false;
};

const mapStateToProps = (state: any) => { 
    const signupResult = getSignupStatus(state);
    return {
        signupResult,
    };
};

export default subscribeStateChange(mapStateToProps)(SignupForm);
