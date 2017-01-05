import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AuthActions } from './redux/actions';

export class Logout extends Component {

  componentWillMount() {
    this.props.authActions.logoutUser()
  }

  render() {
    return (
      <div></div>
    )
  }
}

Logout.propTypes = {
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  const {
    auth: {
      errorMessage
    }
  } = state;

  return {
    errorMessage
  };
}

function mapDispatchToProps(dispatch) {
	return {
    authActions: bindActionCreators(AuthActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
