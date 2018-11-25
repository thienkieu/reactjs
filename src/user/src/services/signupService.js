import EventManager from 'infrastructure/event/eventManager';

import Constant from '../constants';
import { getStore } from 'infrastructure';

const signupService = {
    initService: function(){
        EventManager.addEventListener(Constant.signupForm, function (event, params){
            setTimeout(function(){
                var errors = {
                    isSuccess: true,
                    errorInfo: {
                        email: 'Email is not correct',
                        password: 'Password is not correct',
                        confirmPassword: 'Confirm password is not match',
                    },
                };
                
                EventManager.dispatch(Constant.signupResult, this, errors);

            },3000);
        });

        EventManager.addEventListener(Constant.signupSuccess, function (event, params){
            setTimeout(function(){
                var user = {
                    type: Constant.signupSuccess,
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

export default signupService;
