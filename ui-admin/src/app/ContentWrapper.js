import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';

import Header from './Header';
import Footer from './Footer';


class ContentWrapper extends Component {
  render() {
    const { session, auth } = this.props;

    return (
      <div className="content-wrapper">
        <Header
          loggedIn={!!auth.isAuthenticated}
          router={this.context.router}
          session={session}
        />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

ContentWrapper.propTypes = {
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

export default connect(mapStateToProps)(ContentWrapper);
