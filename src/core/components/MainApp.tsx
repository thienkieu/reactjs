import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { _ } from 'libs/index';
import { ThemeManager } from  'themeModule/index';

export interface MainAppProps {
    store: {},
    history: {},
    siteUrl: {},
}

class MainApp  extends React.Component<MainAppProps>{
    render() {
        return (
            <Provider store={this.props.store}>
                <ThemeManager >
                    <ConnectedRouter history={this.props.history}>
                        <Switch>
                            {_.map(this.props.siteUrl, (route: any, key: any) => {
                                const { ContentComponent, path, Layout } = route;
                                return (
                                    <Route exact path={path} key={key} render={
                                        (r: any)=>( 
                                            <Layout route={r} >
                                                <ContentComponent/>
                                            </Layout> 
                                        )}
                                    />);
                                })
                            }
                        </Switch>
                    </ConnectedRouter>
                </ThemeManager>
            </Provider>
        );
    }
}

export default MainApp
