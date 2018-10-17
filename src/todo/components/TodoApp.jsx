import React from 'react';
import OpenTodoList from './OpenTodoList.jsx';
import DoneTodoList from './DoneTodoList.jsx';
import { DoneTodoListPackage, OpenTodoListPackage } from 'todoPackage';
import { withTheme } from 'libs/index';
import redirectToLogin from '../proxy/redirectToLogin';

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        redirectToLogin();
    }
    
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

export default withTheme(TodoApp);
