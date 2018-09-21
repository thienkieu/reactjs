import { combineReducers } from 'redux';
import { 
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../constants/actionTypes';

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER: 
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO: 
            return [
                ...state,
                {
                    text: action.payload.text,
                    description: action.payload.description,
                    location: action.payload.location
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
            })
        default: 
            return state
    }
}

const todoAppReducer = combineReducers({
        visibilityFilter,
        todos
});

export default todoAppReducer;