import createSagaMiddleware from 'redux-saga';
import { _ } from 'libs/index';

const sagaMiddleware = createSagaMiddleware();

function initSaga(store) {
    store.injectedSagas = {};
    store.runSaga = sagaMiddleware.run;
}

function injectSaga(store, name, saga) {
    if (!store.injectedSagas.hasOwnProperty(name)) {
        store.injectedSagas[name] = saga;
        _.forEach(saga, (value, key)=>{
            store.runSaga(value);
        }); 
    }
}

export { initSaga, injectSaga, sagaMiddleware }


