import { createSelector } from 'reselect';

const getUserModule = function(state){
    return state.userModule;
}
const makeSelectorGetUserInfo = () => {
    return createSelector(getUserModule, userModule => {
        return userModule.currentUser;
    });
}

const getUserInfoSelector = (state) => {
    const makeUserInfoSelector =  makeSelectorGetUserInfo();
    return makeUserInfoSelector(state);
}

export default getUserInfoSelector;
