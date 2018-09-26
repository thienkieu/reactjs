import React from 'react';
import OpenTodoList from './OpenTodoList.jsx';
import DoneTodoList from './DoneTodoList.jsx';
import { DoneTodoListPackage, OpenTodoListPackage } from 'todoPackage';
import * as style from '../../style.css';

class TodoApp extends React.Component  {
    render() {
        return (
            <div className={style.app}>
                <OpenTodoList />
                <DoneTodoList />
                <DoneTodoListPackage />
                <OpenTodoListPackage />
            </div>
        );
    }
}

export default TodoApp;

