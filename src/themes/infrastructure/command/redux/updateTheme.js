const initialState = {
    color: 'white',
    backgroundColor: 'red',
}

function theme(state = initialState, action) {
    switch (action.type) {
        case 'updateTheme': 
            return action.payload.theme
            
        default: 
            return state
    }
}

const themeReducer = {
    theme
};

export default themeReducer;