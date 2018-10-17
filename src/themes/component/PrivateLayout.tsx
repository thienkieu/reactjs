import * as React from "react";
import { withTheme } from 'libs/index';
import Sticky from "./Sticky";
import Header from './Header';
import Footer from './Footer';
import PageContent from "./PageContent";

interface Props {
    children: React.ReactNode,
    theme: any
}

@withTheme
class PrivateLayout extends React.Component<Props> {
    render() {
        return (
            <div>
                <Header>
                    <Sticky/>
                </Header>
                <PageContent>
                    {this.props.children}
                </PageContent>
                <Footer/> 
            </div> 
        );
    }
};

export default PrivateLayout;