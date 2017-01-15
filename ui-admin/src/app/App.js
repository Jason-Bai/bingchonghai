import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import Header from './Header';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';
import { SessionActions } from '../session/redux/actions';

class App extends Component {

  componentWillMount() {
    const now = moment(),
          expiredAt = localStorage.getItem('expiredAt'),
          expiredTime = moment(expiredAt);
    if (!this.props.auth.isAuthenticated || !expiredAt || expiredTime.diff(now) <= 0) {
      localStorage.clear();
      return browserHistory.push('/');
    }
		this.props.sessionActions.fetchProfile();
  }

  render() {
    const { dispatch, auth } = this.props;
    return (
      <div>
        <Header
          loggedIn={!!auth.isAuthenticated}
          router={this.context.router}
          session={this.props.session}
        />
        <ContentWrapper {...this.props} />
        <Footer />
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
    session,
    routing
  } = state

  return {
    auth,
    session,
    routing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sessionActions: bindActionCreators(SessionActions, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
