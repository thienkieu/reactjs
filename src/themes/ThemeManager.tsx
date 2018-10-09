import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ThemeProvider from 'themeProvider';
import { getSelectedTheme } from './DataManager/index';

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
        //logService.log('ThemeManager --- componentWillMount');
    }

    render() {
        console.log(this.props);
        return (
            <ThemeProvider theme={this.props.theme}>
                {this.props.children}
            </ThemeProvider>
        )
    }
};

const mapStateToProps = (state: any) => { 
    const theme = getSelectedTheme(state);
    return theme;
};

export default connect(mapStateToProps) (ThemeManager);