import { combineReducers } from 'redux';
import todoAppReducer from './todo/reducers/TodoAppReducer';
import userAppReducer from './user/reducers/index';

const createReducer = function(asyncReducers) { 
    return combineReducers({
        todoAppReducer,
        userAppReducer,
    });
}

export default createReducer;