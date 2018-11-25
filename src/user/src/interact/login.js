import MOWEDE from 'services/registry';
import { sequenceflow } from 'infrastructure/flow/index';

import getUserInfo from '../proxy/getUserInfo';
import updateLoginResult from '../proxy/updateLoginResult';

/**
 * 1. call api to get token
 * 2. dispath result from api
 */

const login = async function(params, completedHandler) {
    const logService = MOWEDE.services.subscribe('logService');
    logService.log('this is log login', 'login');
    return getUserInfo(params);
    //return sequenceflow([getUserInfo, updateLoginResult], params, completedHandler);
}

export default login;
