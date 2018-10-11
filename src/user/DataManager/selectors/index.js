import { createSelector } from 'reselect';
import { initialState } from '../reducer/index';
import getStore from '../../../core/store';

const selectUser = (state) => {
    return state.userModule.user;
}

const makeSelectUser = () => {
    return createSelector(selectUser, user => {
        return user.username;
    });
}

export { makeSelectUser };