import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return (
        <h4>
          Please select a user!
        </h4>
      );
    }
    return (
      <div>
        <h4>{this.props.user.firstName} {this.props.user.LastName}</h4>
        <h4> age : {this.props.user.age}</h4>
        <h4> description : {this.props.user.description}</h4>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.activeuser
  };
}

export default connect(mapStateToProps)(UserDetail);
