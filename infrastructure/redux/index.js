import { combineReducers, compose } from 'redux';
import { connectRouter } from 'connected-react-router';
import { connect } from 'react-redux';

const createReducer = function(reducers, history) { 
    return connectRouter(history)(combineReducers({
        ...reducers
    }));
}

const initReducer = function(store) {
    store.injectedReducers = {};
}

const injectReducer = function(store,name, reducers) {
    if (!store.injectedReducers.hasOwnProperty(name)) {
        const r = combineReducers(reducers);
        store.injectedReducers[name] = r;
        store.replaceReducer(createReducer(store.injectedReducers, store.history));
    }
}

export { initReducer, injectReducer, createReducer, connect, compose }


