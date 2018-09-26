import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Login } from './Login';
import { Register } from './Register';

export const Content = () => {
    return (
        <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
        </Switch>
    );
}