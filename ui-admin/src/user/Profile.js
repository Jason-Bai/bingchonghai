import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Profile extends Component {
  render() {
    return (
      <div>
        <h1>profile</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps)(Profile)