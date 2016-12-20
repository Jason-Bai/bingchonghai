import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class App extends Component {

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      return browserHistory.push('/login')
    }
  }

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    return (
      <div>
        app here
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {
  const {
    auth: {
      isAuthenticated,
      errorMessage
    }
  } = state

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)
