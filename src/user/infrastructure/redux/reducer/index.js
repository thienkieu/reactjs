import { fromJS } from 'libs';
import { updateFailLoginConstant, updateSuccessLoginConstant, logoutConstant, loginSuccess } from '../constant';

//import { USER_GET_USER_INFO, USER_LOADED_USER_INFO } from '../../constants/actionTypes';

export const initialState = function(){
    let loginStatus = {};
    let user = localStorage.getItem('currentUser', '');
    if (user) {
        user = JSON.parse(user);
        loginStatus.isLogin = true,
        loginStatus.currentUser = user;
    } else {
        user = {};
        loginStatus.isLogin = false,
        loginStatus.currentUser = user;
    }

    return loginStatus;
}

const user = function(state = {}, action) {
    switch(action.type) {
        /*case USER_GET_USER_INFO: {
            return {
                username: action.payload.username
            }
        }
        case USER_LOADED_USER_INFO: {
            return {
                username: action.payload.username,
                id: action.payload.id,
                profileUrl: action.payload.profileUrl,
            }
        }
        case updateSuccessLoginConstant : {
            return {
                ...state,
                isLogin: true,
                currentUser: action.payload.userInfo,
                userRepo: action.payload.repo,
            }
        }
        case updateFailLoginConstant: {
            return {
                ...state,
                loginError: action.payload.errors,
                isLogin: false,
            }
        }*/

        default:
            return state;
        
    }
}

const loginInfo = function(state = initialState() , action) {
    switch(action.type) {
        case loginSuccess : {
            const currentUser = {
                email: action.payload.email,
                token: action.payload.token,
            }
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            return {
                ...state,
                isLogin: true,
                currentUser,
            }
        }
        case updateFailLoginConstant: {
            return {
                ...state,
                loginError: action.payload.errors,
                isLogin: false,
            }
        }
        case logoutConstant: {
            return {
                ...state,
                isLogin: false,
                currentUser: {},
                userRepo: {},
            }
        }

        default:
            return state;
        
    }
}

const userReducer = {
    users: user,
    loginInfo,
}

export default userReducer;