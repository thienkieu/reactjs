import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import getStore, { getHistory } from './store';
import TodoApp from '../todo/components/TodoApp.jsx';
import { DoneTodoListPackage, OpenTodoListPackage } from 'todoPackage';
import { NonFooterApp } from './components/NonFooterApp';

ReactDOM.render(
    <Provider store={getStore()}>
        <ConnectedRouter history={getHistory()}>
            <Switch>
                <Route exact path="/" component={TodoApp}/>
                <Route path="*" component={NonFooterApp}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);