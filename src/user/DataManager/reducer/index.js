import { fromJS } from 'libs/index';

import { USER_GET_USER_INFO, USER_LOADED_USER_INFO } from '../../constants/actionTypes';

export const initialState = fromJS({
    username: '',
});

const user = function(state = initialState, action) {
    switch(action.type) {
        case USER_GET_USER_INFO: {
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
        default:
            return state;
        
    }
}

const userReducer = {
    user
}

export default userReducer;