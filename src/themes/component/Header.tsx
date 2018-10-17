import * as React from "react";
import { withTheme } from 'libs/index';
import Content from "./Content";
import styled from 'styled-components';
interface Props {
}

const TopElement = styled('div')`
    background: gray;
    min-height: 200px;
    display: block;
`
class Header extends React.Component<Props> {
    render() {
        return (
            <Content>
                <header>
                    <TopElement>this is top element</TopElement>
                    {this.props.children}
                </header>
            </Content>   
        );
    }
};

export default withTheme(Header);