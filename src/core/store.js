import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware , push } from 'connected-react-router';

import createReducer from './reducer';
import { watchGetUserInfoEvent } from './saga';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    connectRouter(history)(createReducer()),
    composeWithDevTools(),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
);

store.runSaga = sagaMiddleware.run;
store.injectedReducers = {};
store.injectedSagas = {};
store.runSaga(watchGetUserInfoEvent);

function getStore() {
    return store;
}

export default getStore;

export function getHistory() {
    return history;
}


const event = {
    type: 'USER_GET_USER_INFO',
    payload: {
        username: 'thienkieu'
    }
}

store.dispatch(event);
//store.dispatch(push('/abc'));