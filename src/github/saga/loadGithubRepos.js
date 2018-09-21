import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOAD_GITHUB_REPOS } from '../constants/actionTypes';
import { request } from "https";
import { WSASYSNOTREADY } from "constants";


export function* getRepos() {
    const username = 'thienkieu';
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

    try {
        const repos = yield call(request, requestURL);
        yield put(reposLoaded(repos, username));
    }
}