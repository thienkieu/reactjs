import { createSelector } from 'reselect';

const isLoginSelector = function(state){
    return state.userModule.user;
}
const makeSelectorIsLogin = () => {
    return createSelector(isLoginSelector, user => {
        return user.isLogin;
    });
}

const isLogin = (state) => {
    const makeIsLoginSelector =  makeSelectorIsLogin();
    return makeIsLoginSelector(state);
}

export default isLogin;
