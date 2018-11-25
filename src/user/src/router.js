import LoginPage from 'userModule/src/components/Login/LoginPage';
import SignupPage from 'userModule/src/components/Signup/SignupPage';

const userURL = {
    Login: {
        ContentComponent: LoginPage,
        path: '/user/login'
    },
    
    Signup: {
        ContentComponent: SignupPage,
        path: '/user/signup'
    },
    
    Home: {
        ContentComponent: LoginPage,
        path: '/user'
    } 

}

export default userURL;