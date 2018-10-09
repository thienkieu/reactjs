import userReducer from './reducer/index';
import { injectReducer } from 'infrastructure/reducer/index';
import { injectSaga } from 'infrastructure/saga/index';

import userSaga from './saga/index';

const initUserModule = function(store) {
    injectReducer(store, 'userModule', userReducer);
    injectSaga(store, 'userModule', userSaga);
}

export default initUserModule;