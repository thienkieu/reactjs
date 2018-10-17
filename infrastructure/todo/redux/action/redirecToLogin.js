import { redirectToLoginConstant } from '../constant';
import { getStore } from 'store';
import { push } from 'connected-react-router';

const redirectToLogin = function(){
    getStore().dispatch(push('/login'));
}

export default redirectToLogin;
