import * as React from "react";
import styled from 'styled-components';
import { withTheme } from 'libs/index';
import Content from "./Content";

const MinHeightContent = styled(Content)`
    height: calc(100vh - 80px);
`
interface Props {
    children: React.ReactNode
}

class PageContent extends React.Component<Props> {
    render() {
        return (
            <MinHeightContent>
                {this.props.children}
            </MinHeightContent>
        );
    }
};

export default withTheme(PageContent);