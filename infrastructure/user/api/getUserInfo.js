/**
 * wil use sage to implement call api
 */

import request from 'infrastructure/api/request';

const getUserInfoAPI = async function(username, password) {

    const requestURl = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

    try {
        const repos = await request(requestURl);
        return repos;
        //yield put(loadedUserInfo('thien.kieu'));
    } catch (error) {
        //yield put()
    }

}

export default getUserInfoAPI;