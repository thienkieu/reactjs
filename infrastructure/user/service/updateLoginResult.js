import { getStore } from 'store';
import EventManager from 'infrastructure/event/eventManager';

import updateSuccessLogin from '../redux/action/updateSuccessLogin';
import updateFailLogin from '../redux/action/updateFailLogin';

const updateLoginResult = async function(result){
    //EventManager.dispatch('loginResult', this, result);
    if (result.isSuccess === true){
        updateSuccessLogin(result);
        localStorage.setItem('isLogin',true);
    } else {
        //updateFailLogin(result);
    }

    return result;
}

export default updateLoginResult;