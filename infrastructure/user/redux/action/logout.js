import { logoutConstant } from '../constant';
import { getStore } from 'store';

const updateLogin = function(errors){
    const command = {
        type: logoutConstant,
        payload: {
        }
    };
    
    getStore().dispatch(command);
}

export default updateLogin;
