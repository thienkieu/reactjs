import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { updateLoginConstant } from '../constant';

//import { makeSelectUser } from '../selectors/index';
import request from 'infrastructure/api/request';
//import { loadedUserInfo } from '../../actions/index';

function* fetchUserInfo() {
    /*const username = yield select(makeSelectUser());
    const requestURl = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

    try {
        const repos = yield call(request, requestURl);
        console.log(repos);
        yield put(loadedUserInfo('thien.kieu'));
    } catch (error) {
        //yield put()
    }*/
}

const getUserRepo = function*() {
    //yield takeEvery(updateLoginConstant, fetchUserInfo);
}

export default getUserRepo;