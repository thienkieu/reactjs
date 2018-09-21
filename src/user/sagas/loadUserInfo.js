import { call, put, select, takeLatest } from 'redux-saga/effects';
import { USER_GET_USER_INFO, USER_LOADED_USER_INFO } from '../constants/actionTypes';
import { makeSelectUser } from '../selectors/index';
import { request } from '../api/request';
import { loadedUserInfo } from '../actions/index';

export function* fetchUserInfo() {
    const username = yield select(makeSelectUser());
    const requestURl = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

    try {
        const repos = yield call(request, requestURl);
        console.log(repos);
        yield put(loadedUserInfo('thien.kieu'));
    } catch (error) {
        //yield put()
    }
}

export default function* userData() {
    yield takeLatest(USER_GET_USER_INFO, fetchUserInfo);
}