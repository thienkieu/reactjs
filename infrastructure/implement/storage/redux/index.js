import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware , push } from 'connected-react-router';

import { _ } from 'libs/index';

function createReducer(reducers, history) { 
    return connectRouter(history)(combineReducers({
        ...reducers
    }));
}

function initReducer(store) {
    store.injectedReducers = {};
}

function injectReducer(store,name, reducers) {
    if (!store.injectedReducers.hasOwnProperty(name)) {
        const r = combineReducers(reducers);
        store.injectedReducers[name] = r;
        store.replaceReducer(createReducer(store.injectedReducers, store.history));
    }
}

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

let store = null;
function initStore() {
    const history = createBrowserHistory();
    store = createStore(
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

    return store;
}

function getStore(){
    return store;
}

function subscribeStateChange(mapStateToProps, mapDispatchToProps){
    return function(WrapperComponent){
        return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
    }
}

export {
    initStore,
    getStore,
    injectReducer,
    injectSaga,
    subscribeStateChange,
}