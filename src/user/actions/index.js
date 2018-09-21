import { USER_LOADED_USER_INFO, USER_GET_USER_INFO } from '../constants/actionTypes';

export function loadUserInfo(username) {
    return {
        type: USER_GET_USER_INFO,
        payload: {
            username,
        }
    }
}

export function loadedUserInfo(username){
    return {
        type: USER_LOADED_USER_INFO,
        payload: {
            username,
            id: 'thien',
            profileUrl: 'thien.kieu',
        }
    }
}