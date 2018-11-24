import { getStore } from 'store';
import EventManager from 'infrastructure/event/eventManager';

import updateLogin from '../redux/action/updateLogin';

const updateLogined = async function(result){
    //EventManager.dispatch('loginResult', this, result);
    updateLogin(result);
    localStorage.setItem('isLogin',true);
}

export default updateLogined;