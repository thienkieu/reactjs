import * as React from "react";
import { withTheme } from 'libs/index';

interface Props {
    children: React.ReactNode,
    header: Function,
    footer: Function,
    className: string,
    theme: any
}

@withTheme
class PublicLayout extends React.Component<Props,{}> {
    render() {
        const style={
            background: this.props.theme.backgroundColor,
        }
        
        return (
            <div style={style} className={this.props.className}>
                {this.props.children}
                <div>this is public layout</div>
            </div>
        )
    }
};

export default PublicLayout;
