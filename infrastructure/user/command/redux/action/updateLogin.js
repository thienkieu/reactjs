import { updateLoginConstant } from '../constant';
import { getStore } from '../../../../redux/store';

const updateLogin = function(response){
    const command = {
        type: updateLoginConstant,
        payload: {
            status: response.status
        }
    };
    getStore().dispatch(command);
}

export default updateLogin;
