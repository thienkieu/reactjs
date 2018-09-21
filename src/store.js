import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';
import userData from './user/sagas/loadUserInfo';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    createReducer(),
    composeWithDevTools(),
    applyMiddleware(sagaMiddleware),
);
store.runSaga = sagaMiddleware.run;
store.injectedReducers = {};
store.injectedSagas = {};

store.runSaga(userData);

function getStore() {
    return store;
}

export default getStore;

export function injectAsyncReducer(name, asyncReducer) {
    store.injectedReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.injectedReducers));
}