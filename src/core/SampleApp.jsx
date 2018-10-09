import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import _ from 'lodash';
import getStore, { getHistory } from './store';
import TodoApp from '../todo/components/TodoApp.jsx';
import { DoneTodoListPackage, OpenTodoListPackage } from 'todoPackage';
import { NonFooterApp } from './components/NonFooterApp';
import ThemeProvider from 'themeProvider';
import { theme } from '../themes/index';
import SiteURL from '../initializers/routes';
import PublicLayoutStyle from '../themes/default/PublicLayoutStyle';
import PublicLayoutWithTheme from '../themes/default/PublicLayoutWithTheme';

ReactDOM.render(
    <Provider store={getStore()}>
        <ConnectedRouter history={getHistory()}>
            <Switch>
                {_.map(SiteURL, (route, key) => {
                        const { ContentComponent, headerComponent, footerComponent, path, Layout } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={
                                    (route)=> 
                                    <ThemeProvider theme={theme}>
                                        <Layout route={route} header={headerComponent} footer={footerComponent}>
                                            <ContentComponent/>
                                            <PublicLayoutStyle/>
                                            <PublicLayoutWithTheme/>
                                        </Layout> 
                                    </ThemeProvider>
                                }
                            />
                        )
                    })
                }
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);