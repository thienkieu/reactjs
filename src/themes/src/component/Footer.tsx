import * as React from "react";
import { withTheme } from 'libs/index';
import Content from "./Content";

interface Props {
}

@withTheme
class Footer extends React.Component<Props> {
    render() {
        return (
            <Content>
                this is footer
            </Content>
        );
    }
};

export default Footer;