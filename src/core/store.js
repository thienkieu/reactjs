import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware , push } from 'connected-react-router';

import { sagaMiddleware, initSaga, injectSage } from '../../infrastructure/saga/index';
import { initReducer, injectReducer } from '../../infrastructure/reducer/index';
import initCoreModule from 'coreModule/DataManager/index';
import initUserModule from 'userModule/DataManager/index';
import initThemeModule from 'themeModule/DataManager/index';

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(()=>{}),
    composeWithDevTools(),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
);

store.history = history;

initReducer(store);
initSaga(store);

initCoreModule(store);
initUserModule(store);
initThemeModule(store);

function getStore() {
    return store;
}

export default getStore;

export function getHistory() {
    return history;
}

const getUserRepo = {
    type: 'USER_GET_USER_INFO',
    payload: {
        username: 'thienkieu'
    }
}
store.dispatch(getUserRepo);

//store.dispatch(push('/abc'));