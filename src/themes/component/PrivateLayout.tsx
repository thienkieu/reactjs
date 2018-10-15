import * as React from "react";
import { withTheme } from 'libs/index';
import Header from "./Header";
import Footer from './Footer';
import Content from "./Content";

interface Props {
    children: React.ReactNode,
    theme: any
}

@withTheme
class PrivateLayout extends React.Component<Props> {
    render() {
        const style={
            background: this.props.theme.backgroundColor,
            width: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }

        return (
            <div style={style}>
                <Header/>
                <Content>
                    {this.props.children}
                </Content>
                <Footer/>
            </div>
        );
    }
};

export default PrivateLayout;