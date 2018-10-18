import { updateLoginConstant } from '../constant';
import { getStore } from 'store';

const updateLogin = function(response){
    const command = {
        type: updateLoginConstant,
        payload: {
            result: response,
            isLogin: true,
        }
    };
    
    getStore().dispatch(command);
}

export default updateLogin;
