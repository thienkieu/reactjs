import Constant from '../constants';
const convertorFactory = function(src, destinationType) {
    switch(destinationType) {
        case Constant.loginResult : 
            return convertLoginResult(src);
        break;

        default:
        break;
    }
}

export default convertorFactory;

const convertLoginResult = src => {
    if (src.status) {
        return {
            status: true,
            token: 'this is token value',
        }
    } else {
        return {
            status: false,
            errors: {
                emailError : 'email is not correly',
                passwordError: 'password error',
            }
        }
    }
    
}