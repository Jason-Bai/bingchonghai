import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* import { createSession } from '../common/sessionActions' */

import { createSession } from '../features/session/redux/actions'

@connect()
export default class Auth extends Component {

  componentDidMount() {
    const { dispatch, location } = this.props
    dispatch(createSession(location.query.code))
  }

  render() {
    return <div>Redirecting...</div>
  }
}
