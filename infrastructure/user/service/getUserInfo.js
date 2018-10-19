import getUserInfoAPI from '../api/getUserInfo';
import getUserInfoLocal from '../selector/getUserInfo'
import { getStore } from 'store';

const getUserInfo = async function(params){
    let userInfo = getUserInfoLocal(getStore().getState());
    if (!userInfo) {
        userInfo = await getUserInfoAPI(params.email, params.password);
    }
    
    return userInfo;
}

export default getUserInfo;