import * as React from 'react';
import { Route, Switch } from 'react-router';

import { _ } from 'libs';
import userURL from 'userModule/src/router';
//import loginService from 'userModule/src/services/loginService';
import { getStore, injectReducer } from 'infrastructure/interfaces/storage';
//import userReducer from './redux/reducer';

class CoreModuleWithRedux  extends React.Component{
    componentWillMount() {
        //loginService.initService();
        const store = getStore();
        //injectReducer(store, 'coreModule', userReducer);
    }

    render() {
        return false;
        /*return (
            <Switch>
                {_.map(userURL, (route: any, key: any) => {
                    const { ContentComponent, path } = route;
                    return (
                        <Route path={path} key={key} render={
                            (r: any)=>( 
                                <ContentComponent/>
                            )}
                        />);
                    })
                }
            </Switch>
        );*/
    }
}

export default CoreModuleWithRedux;
