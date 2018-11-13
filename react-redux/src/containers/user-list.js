import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';

class UserList extends Component {

  createListUser() {
    //use map to loop through the array
    return this.props.users.map((user) => {
      return (
        <li
          key={user.id}
          onClick = {() => this.props.selectUser(user)}
        >
        {user.firstName} {user.LastName}
        </li>
      );
      });
  }

  render () {
    return (
      <ul>
        {this.createListUser()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
