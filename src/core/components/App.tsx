import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { _ } from 'libs';


export interface AppProps {
    store: any,
    siteUrl: any,
}

class App  extends React.Component<AppProps>{
    render() {
        return (
            <Provider store={this.props.store}>
               
                    <ConnectedRouter history={this.props.store.history}>
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
                
            </Provider>
        );
    }
}

export default App
