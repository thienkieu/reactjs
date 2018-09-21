import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from './store';
import TodoApp from './todo/components/TodoApp.jsx';
import { makeSelectUser } from './user/selectors/index';

ReactDOM.render(
    <Provider store={getStore()}>
        <TodoApp>
        </TodoApp>
    </Provider>,
    document.getElementById('app')
);
