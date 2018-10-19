import { updateSuccessLoginConstant } from '../constant';
import { getStore } from 'store';

const updateLogin = function(result){
    const command = {
        type: updateSuccessLoginConstant,
        payload: {
            repo: result,
            isLogin: true,
            userInfo: {
                id: '1',
                username: 'thienkieu',
                email: 'thien',
            }
        }
    };
    
    getStore().dispatch(command);
}

export default updateLogin;
