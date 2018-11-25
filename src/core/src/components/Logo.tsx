import * as React from 'react';
import { styled } from 'infrastructure';
import { logo } from '../media';

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
        return (
            <LogoLink href="/core">
                <img src={logo} />
            </LogoLink>
        )
    }
};

export default Logo;
