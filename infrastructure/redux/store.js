import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware , push } from 'connected-react-router';

import { sagaMiddleware, initSaga, injectSage } from '../saga/index';
import { initReducer, injectReducer } from './index';

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(()=>{}),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
        ),
        composeWithDevTools(),
    ),
    
);

store.history = history;

initReducer(store);
initSaga(store);

export function getStore() {
    return store;
}


export function getHistory() {
    return history;
}
