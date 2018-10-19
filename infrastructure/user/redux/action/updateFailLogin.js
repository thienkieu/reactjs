import { updateFailLoginConstant } from '../constant';
import { getStore } from 'store';

const updateLogin = function(errors){
    const command = {
        type: updateFailLoginConstant,
        payload: {
            errors: {
                email: 'email is not correct format',
                password: 'password is not correct',
            }
        }
    };
    
    getStore().dispatch(command);
}

export default updateLogin;
