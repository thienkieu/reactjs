import EventManager from 'infrastructure/event/eventManager';

import getUserInfo from '../query/getUserInfo';
import updateLogin from '../command/updateLogin';

const loginService = function(){
    handleLogin = function(){
        this.getUserInfo();
        this.updateLogin();
    };

    getUserInfo = function(){
        // 1. check local store 
        // 2. getAPI catch;
    }

    updateLogin = function() {
        updateLogin();
    }

}

export default loginService;
