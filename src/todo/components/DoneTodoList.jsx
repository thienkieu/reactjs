import React, { Component } from 'react';
import getStore from '../../core/store';
import { Hello } from "../../typescript/Hello.tsx";
import { connect } from 'react-redux'

class DoneTodoList extends Component {

    render() {
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
    return {
    };
}

export default connect(
    mapStateToProps,
  )(DoneTodoList)