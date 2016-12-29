import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from './Header';
import ContentWrapper from './ContentWrapper';

class App extends Component {

  componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      return browserHistory.push('/')
    }
  }

  render() {
    const { dispatch, auth } = this.props;
    const { isAuthenticated, errorMessage } = auth;
    return (
      <div>
        <Header
          loggedIn={!!auth.isAuthenticated}
          router={this.context.router}/>
        <ContentWrapper {...this.props} />
      </div>
    )
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {
  const {
    auth,
    routing
  } = state

  return {
    auth,
    routing
  };
}

export default connect(mapStateToProps)(App);
