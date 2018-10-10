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
            background: this.props.theme.background,
        }
        console.log(this.props);
        return (
            <div style={style} className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
};

export default PublicLayout;
