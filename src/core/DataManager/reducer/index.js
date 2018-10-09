function core(state = [], action) {
    switch (action.type) {
        case 'core': 
            return [
                ...state,
                {
                    abc: 'abc'
                }
            ]
    
        default: 
            return state
    }
}

const coreReducer = {
    core
};

export default coreReducer;