import React, { Component } from 'react';
import getStore from '../store';
import { Hello } from "../../typescript/Hello.tsx";
import { connect } from 'react-redux'

class DoneTodoList extends Component {

    render() {
        console.log(getStore().getState());
        console.log('render DoneToDoLIst');
        return (
            <div>
                This is done list
                <Hello complier="TypeScript" framework="React" />
            </div>
        );
    }

    shouldComponentUpdate() {
        console.log('should component update');
    }

    componentWillReceiveProps() {
        console.log('component will recieve props');
    }
}

const mapStateToProps = (state) => {
    console.log('DoneToDolist ');
    console.log('state ');
    console.log(state);
    return {

    };
}

export default connect(
    mapStateToProps,
  )(DoneTodoList)