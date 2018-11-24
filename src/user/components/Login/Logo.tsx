import * as React from 'react';
import styled from 'styled-components';
import SiteURL from 'initializers/routes';
import login from '../../interact/login';
import { loginLogo } from '../../media/index';

const LogoLink = styled('a')`
    padding-bottom:50px;
`;

interface LogoProps {
}

class Logo extends React.Component<LogoProps,any> {
    constructor(props: LogoProps){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return false;
        /*return (
            <LogoLink href={SiteURL.Home.path}>
                <img src={loginLogo} />
            </LogoLink>
        )*/
    }
};

export default Logo;
