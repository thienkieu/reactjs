import getUserInfoAPI from '../api/getUserInfo';
import getUserInfoSelector from '../selector/getUserInfo'
import { getStore } from 'store';

const getUserInfo = async function(){
    let userInfo = getUserInfoSelector(getStore().getState());
    if (!userInfo) {
        userInfo = await getUserInfoAPI();
    }
    
    return userInfo;
}

export default getUserInfo;