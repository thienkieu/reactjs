import React, { Component } from 'react';
import { connect } from 'react-redux'

class DoneTodoListPackage extends Component {

    render() {
        return (
            <div>
                This is done list in packages
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
  )(DoneTodoListPackage)