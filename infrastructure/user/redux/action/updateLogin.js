import { updateLoginConstant } from '../constant';
import { getStore } from 'store';

const updateLogin = function(response){
    const command = {
        type: updateLoginConstant,
        payload: {
            status: response
        }
    };
    
    getStore().dispatch(command);
}

export default updateLogin;
