import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ThemeProvider from 'themeProvider';
import getSelectedTheme from '../query/getSelectedTheme';

import ThemeSelection from './ThemeSelection';

interface Props {
    theme: any,
    children: React.ReactNode,
    context: any,
}

class ThemeManager extends React.Component<Props,{}> {
    constructor(props: Props, context: any){
        super(props, context);
    }

    componentWillMount() {
        //need to checkout user login or not 
        // if not login we need to fetch user or change to login page => 
        //logService.log('ThemeManager --- componentWillMount');
    }

    render() {
        console.log(this.props);
        return (
            <ThemeProvider theme={this.props.theme}>
                <ThemeSelection>
                    {this.props.children}
                </ThemeSelection>
            </ThemeProvider>
        )
    }
};

const mapStateToProps = (state: any) => { 
    const theme = getSelectedTheme(state);
    return theme;
};

export default connect(mapStateToProps) (ThemeManager);