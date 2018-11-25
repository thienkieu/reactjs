import * as React from "react";
import { withTheme } from 'libs/index';
import Content from "./Content";
import styled from 'styled-components';
import { headerImage1 } from '../media/index';

interface Props {
}

const TopElement = styled('div')`
    min-height: 200px;
    display: block;
`

const HeaderWrapper = styled('header')`
    background-image: url(${headerImage1});
`
class Header extends React.Component<Props> {
    render() {
        return (
            <Content>
                <HeaderWrapper>
                    <TopElement>this is top element</TopElement>
                    {this.props.children}
                </HeaderWrapper>
            </Content>   
        );
    }
};

export default withTheme(Header);