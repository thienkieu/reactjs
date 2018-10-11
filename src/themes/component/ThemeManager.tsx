import * as React from 'react';
import { connect } from 'react-redux';

import ThemeProvider from 'themeProvider';

import getActiveTheme from '../query/getActiveTheme';
import getListThemes from '../query/getListThemes';
import ThemeSelection from './ThemeSelection';

interface Props {
    activeTheme: string,
    supportThemes: any,
    children: React.ReactNode,
}

class ThemeManager extends React.Component<Props,{}> {
    constructor(props: Props){
        super(props);
    }

    componentWillMount() {
        //need to checkout user login or not 
        // if not login we need to fetch user or change to login page => 
        //logService.log('ThemeManager --- componentWillMount');
    }

    render() {
        return (
            <ThemeProvider theme={this.props.supportThemes[this.props.activeTheme]}>
                {this.props.children}
            </ThemeProvider>
        )
    }
};

const mapStateToProps = (state: any) => { 
    const activeTheme = getActiveTheme(state);
    const supportThemes = getListThemes(state);
    return {
        activeTheme,
        supportThemes,
    };
};

export default connect(mapStateToProps) (ThemeManager);