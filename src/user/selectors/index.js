import { createSelector } from 'reselect';
import { initialState } from '../reducers/index';
import getStore from '../../core/store';

const selectUser = () => {
    return getStore().getState().userAppReducer;
}

const makeSelectUser = () => {
    return createSelector(selectUser, user => {
        return user.username;
    });
}

export { makeSelectUser };