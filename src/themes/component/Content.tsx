import * as React from "react";
import { withTheme } from 'libs/index';
import styled from 'styled-components';

const ContentStyleComponent = styled('div')`
    width: 900px;
    margin-left: auto;
    margin-right: auto;
`;

interface ContentProp{
    style: Object,
    className: string,
}
class Content extends React.Component<ContentProp> {
    render() {
        return (
            <ContentStyleComponent style={this.props.style} className={this.props.className}>
                {this.props.children}
            </ContentStyleComponent>
        );
    }
};

export default withTheme(Content);
