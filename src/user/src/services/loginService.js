import EventManager from 'infrastructure/event/eventManager';

import Constant from '../constants';
import { getStore } from 'infrastructure';

const loginService = {
   /* handleLogin: function(){
        this.getUserInfo();
        this.updateLogin();
    },

    getUserInfo: function(){
        // 1. check local store 
        // 2. getAPI catch;
    },

    updateLogin: function() {
        updateLogin();
    },
*/
    initService: function(){
        EventManager.addEventListener(Constant.loginForm, function (event, params){
            setTimeout(function(){
                var errors = {
                    isSuccess: true,
                    errorInfo: {
                        email: 'Email is not correct',
                        password: 'Password is not correct',
                    },
                };
                
                EventManager.dispatch(Constant.loginResult, this, errors);

            },3000);
        });

        EventManager.addEventListener(Constant.loginSuccess, function (event, params){
            setTimeout(function(){
                var user = {
                    type: Constant.loginSuccess,
                    payload: {
                        email: 'thien1988@gmail.com',
                        token: 'token',
                    }
                };
                
                getStore().dispatch(user);

            },100);
        });
    }

}

export default loginService;
