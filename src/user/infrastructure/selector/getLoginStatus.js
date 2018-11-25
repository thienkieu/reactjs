import { createSelector } from 'reselect';

const getLoginInfo = function(state){
    return state.userModule.loginInfo;
}
const makeGetLoginResultSelector = () => {
    return createSelector(getLoginInfo, userInfo => {
        return userInfo;
    });
}

const getLoginStatus = (state) => {
    const getLoginResultSelector =  makeGetLoginResultSelector();
    return getLoginResultSelector(state);
}

export default getLoginStatus;