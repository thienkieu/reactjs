import MOWEDE from 'services/registry';
import { sequenceflow } from 'infrastructure/flow/index';

import getUserInfo from '../query/getUserInfo';
import updateLogin from '../command/updateLogin';

/**
 * 1. call api to get token
 * 2. dispath result from api
 */

const login = function(user, password) {
    const logService = MOWEDE.services.subscribe('logService');
    logService.log('this is log login', 'login');

    sequenceflow([getUserInfo, updateLogin], {user, password});
}

export default login;
