import * as React from "react";
import { withTheme } from 'libs/index';

interface Props {
    children: React.ReactNode
}

@withTheme
class Content extends React.Component<Props> {
    render() {
        let style = {
            background: 'gray',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '15px',
            paddingRight: '15px',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 140px)',
        };

        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
};

export default Content;