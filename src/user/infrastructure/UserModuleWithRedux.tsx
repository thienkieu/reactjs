import * as React from 'react';
import { Route, Switch } from 'react-router';

import { _ } from 'libs';
import userURL from 'userModule/src/router';
import loginService from 'userModule/src/services/loginService';
import signupService from 'userModule/src/services/signupService';
import { getStore, injectReducer } from 'infrastructure/interfaces/storage';
import userReducer from './redux/reducer';

class UserModuleWithRedux  extends React.Component{
    componentWillMount() {
        loginService.initService();
        signupService.initService();
        const store = getStore();
        injectReducer(store, 'userModule', userReducer);
    }

    render() {
        console.log(userURL);
        return (
            <Switch>
                {_.map(userURL, (route: any, key: any) => {
                    const { ContentComponent, path } = route;
                    return (
                        <Route exact path={path} key={key} render={
                            (r: any)=>( 
                                <ContentComponent/>
                            )}
                        />);
                    })
                }
            </Switch>
        );
    }
}

export default UserModuleWithRedux;
