import { createSelector } from 'reselect';

const getLoginInfo = function(state){
    return state.userModule.signupInfo;
}
const makeGetLoginResultSelector = () => {
    return createSelector(getLoginInfo, userInfo => {
        return userInfo;
    });
}

const getSignupStatus = (state) => {
    const getLoginResultSelector =  makeGetLoginResultSelector();
    return getLoginResultSelector(state);
}

export default getSignupStatus;