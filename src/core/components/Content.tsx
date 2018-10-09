import * as React from 'react';
import { Route, Switch } from 'react-router';
import { withTheme } from 'libs/index';

import { Login } from './login/Login';
import { Register } from './Register';
import * as coreCss from '../core.scss';
interface Props {
    className: string,
    theme: {}
}
@withTheme
class Content extends React.Component<Props,{}> {
    render() {
        console.log(this.props);
        const className = `${coreCss.sectionContent} ${this.props.className}`;
        return(
            <div className={className}>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </div>
        )
    }
};

export { Content };