import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addContentHeader from '../../util/addContentHeader'


const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session
  }
}

@connect(mapStateToProps)
export default class Dashboard extends Component {

  render() {

    const { name, email, role, createdAt } = this.props.session.session

    return (
      <div>Dashboard: {role}</div>
    )
  }
}
