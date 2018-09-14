import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoAppReducer from './reducers/TodoAppReducer';

const store = createStore(todoAppReducer, composeWithDevTools());

function getStore() {
    return store;
}

export default getStore;