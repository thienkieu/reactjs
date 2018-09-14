import { 
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../constants/actionTypes';

export function addTodo(text, location, description) {
    return {
        type: ADD_TODO,
        payload: {
            text: text,
            location: location,
            description: description
        }
    }
}

export function toggleTodo(index, id) {
    return {
        type: TOGGLE_TODO,
        payload: {
            index,
            id
        }
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}
