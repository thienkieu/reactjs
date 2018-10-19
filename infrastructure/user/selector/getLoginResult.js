import { createSelector } from 'reselect';

const getLoginInfo = function(state){
    return state.userModule.loginInfo;
}
const makeGetLoginResultSelector = () => {
    return createSelector(getLoginInfo, userInfo => {
        return userInfo;
    });
}

const getLoginResult = (state) => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin) {
        return {
            isLogin: true,
        }
    }
    const getLoginResultSelector =  makeGetLoginResultSelector();
    return getLoginResultSelector(state);
}

export default getLoginResult;
