import { createSelector } from 'reselect';

const getUserModule = function(state){
    return state.userModule.users;
}
const makeSelectorGetUserInfo = () => {
    return createSelector(getUserModule, users => {
        return users.currentUser;
    });
}

const getUserInfoLocal = (state) => {
    const makeUserInfoSelector =  makeSelectorGetUserInfo();
    return makeUserInfoSelector(state);
}

export default getUserInfoLocal;
