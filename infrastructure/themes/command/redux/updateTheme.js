import { updateThemeConstant } from './constant';

const initThemeData = function(activeTheme, supportThemes) {
    let themeReducer ={
        theme: function(state = {activeTheme, supportThemes}, action) {
            switch (action.type) {
                case updateThemeConstant: 
                    return {
                        ...state,
                        activeTheme: action.payload.activeTheme
                    }
                    
                default: 
                    return state
            }
        }
    };

    return themeReducer;
}

export default initThemeData;