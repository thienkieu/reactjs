import { fromJS } from 'libs/index';
import { updateFailLoginConstant, updateSuccessLoginConstant, logoutConstant } from '../constant';

//import { USER_GET_USER_INFO, USER_LOADED_USER_INFO } from '../../constants/actionTypes';

export const initialState = fromJS({
    username: '',
});

const user = function(state = initialState, action) {
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

const loginInfo = function(state = {} , action) {
    switch(action.type) {
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