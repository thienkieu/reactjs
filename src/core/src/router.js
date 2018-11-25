import LoginPage from 'userModule/src/components/Login/LoginPage';

const coreURL = {
    core1: {
        ContentComponent: LoginPage,
        path: '/user/login'
    },
    core2: {
        ContentComponent: LoginPage,
        path: '/user'
    } 

}

export default userURL;