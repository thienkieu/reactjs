import * as React from "react";
import { withTheme } from 'libs/index';

interface Props {
    children: React.ReactNode
}

@withTheme
class Content extends React.Component<Props> {
    render() {
        return this.props.children;
    }
};

export default Content;