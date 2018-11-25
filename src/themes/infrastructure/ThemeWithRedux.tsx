import * as React from 'react';
import ThemeManager from 'themeModule/src/component/ThemeManager';
import { getStore, injectReducer } from 'infrastructure/interfaces/storage';

import supportThemes from 'themeModule/src/supportThemes';

interface ThemeWithReduxProp{
    children: any,
}

class ThemeWithRedux extends React.PureComponent<ThemeWithReduxProp>{
    constructor(props: any){
        super(props);
    }

    componentWillMount() {
        const store = getStore();
        const reducer = initThemeData('default', supportThemes);
        injectReducer(store, 'themeModule', reducer);
    }

    render() {
        return (
            <ThemeManager>
                {this.props.children}
            </ThemeManager>
        );
    }
}

function initThemeData(activeTheme: any, supportThemes: any) {
    let reducerFucntion = {
        theme: function(state = {activeTheme, supportThemes}, action: any) {
            switch (action.type) {
                case 'updateTheme': 
                    return {
                        ...state,
                        activeTheme: action.payload.activeTheme
                    }
                    
                default: 
                    return state
            }
        }
    };

    return reducerFucntion;
};

export default ThemeWithRedux;

