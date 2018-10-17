import userReducer from './redux/reducer/updateData';
import { injectReducer } from 'infrastructure/redux/index';
import { injectSaga } from 'infrastructure/saga/index';

import getUserRepo from './redux/saga/getUserRepo';
import verifyUserInfo from './redux/saga/verifyUserInfo';

const sageFunction = {
    //verifyUserInfo,
    getUserRepo,
}

const initUserModule = function(store) {
    injectReducer(store, 'userModule', userReducer);
    injectSaga(store, 'userModule', sageFunction);
}

export default initUserModule;
