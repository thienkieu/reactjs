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

function injectReducer(store, name, reducers) {
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

let localStore = null;
function initStore() {
    const history = createBrowserHistory();
    localStore = createStore(
        connectRouter(history)(()=>{}),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware,
            ),
            composeWithDevTools(),
        ),
        
    );

    localStore.history = history;

    initReducer(localStore);
    initSaga(localStore);

    return localStore;
}

function getStore(){
    return localStore;
}

function subscribeStateChange(mapStateToProps, mapDispatchToProps){
    return function(WrapperComponent){
        return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
    }
}

const redirectPage = function(link){
    getStore().dispatch(push(link));
}

const updateState = function(params){
    getStore().dispatch(params);
}

export {
    initStore,
    getStore,
    injectReducer,
    injectSaga,
    subscribeStateChange,
    redirectPage,
    updateState,
}