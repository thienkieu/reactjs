import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from './store';
import TodoApp from './components/TodoApp.jsx';

ReactDOM.render(
    <Provider store={getStore()}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);
