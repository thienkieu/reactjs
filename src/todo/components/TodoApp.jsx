import React from 'react';
import OpenTodoList from './OpenTodoList.jsx';
import DoneTodoList from './DoneTodoList.jsx';
import { DoneTodoListPackage, OpenTodoListPackage } from 'todoPackage';
import { withTheme } from 'libs/index';
import { getLoginResult } from 'userModule/index';
import { connect } from 'infrastructure/redux/index';

import redirectToLogin from '../proxy/redirectToLogin';

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.redirectToLoginPage(this.props);
    }
    
    redirectToLoginPage(props) {
        if (props.loginInfo.isLogin !== true) {
            redirectToLogin();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.redirectToLoginPage(nextProps);
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

const mapStateToProps = function(state){
    const loginInfo = getLoginResult(state);
    return {
        loginInfo,
    }
}
export default connect(mapStateToProps)(withTheme(TodoApp));
