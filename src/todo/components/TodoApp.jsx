import React from 'react';
import OpenTodoList from './OpenTodoList.jsx';
import DoneTodoList from './DoneTodoList.jsx';

class TodoApp extends React.Component  {
    render() {
        return (
            <div>
                <OpenTodoList />
                <DoneTodoList />
            </div>
        );
    }
}

export default TodoApp;

