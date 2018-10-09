import React from 'react';
import OpenTodoList from './OpenTodoList.jsx';
import DoneTodoList from './DoneTodoList.jsx';
import { DoneTodoListPackage, OpenTodoListPackage } from 'todoPackage';
import { withTheme } from 'libs/index';

class TodoApp extends React.Component  {
    render() {
        const style={
            background: this.props.theme.backgroundColor,
            color: this.props.theme.color,
        }

        return (
            <div style={style} className={'todoAp'} >
                <OpenTodoList />
                <DoneTodoList />
                <DoneTodoListPackage />
                <OpenTodoListPackage />
            </div>
        );
    }
}

export default TodoApp;



