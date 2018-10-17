import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import _ from 'lodash';

import getStore, { getHistory } from 'store';
import ThemeProvider from 'themeProvider';
import SiteURL from '../initializers/routes';
import * as Services from '../initializers/services';
import { ThemeManager } from  'themeModule/index';

ReactDOM.render(
    <Provider store={getStore()}>
        <ThemeManager >
            <ConnectedRouter history={getHistory()}>
                <Switch>
                    {_.map(SiteURL, (route, key) => {
                            const { ContentComponent, path, Layout } = route;
                            return (
                                <Route
                                    exact
                                    path={path}
                                    key={key}
                                    render={
                                        (route)=>( 
                                            <Layout route={route} >
                                                <ContentComponent/>
                                            </Layout> 
                                        )
                                    }
                                />
                            )
                        })
                    }
                </Switch>
            </ConnectedRouter>
        </ThemeManager>
    </Provider>,
    document.getElementById('app')
);

