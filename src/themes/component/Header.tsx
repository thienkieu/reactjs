import * as React from "react";
import { withTheme } from 'libs/index';

interface Props {
}

@withTheme
class Header extends React.Component<Props> {
    render() {
        let style = {
            minHeight: '70px',
            background: 'gray',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '15px',
            paddingRight: '15px',
            justifyContent: 'center',
        };

        return (
            <div style={style}>this is header</div>
        );
    }
};

export default Header;