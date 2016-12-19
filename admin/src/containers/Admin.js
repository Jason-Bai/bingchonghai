import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

import config from '../config'
import { AdminHeader, Sidebar, ContainerWrapper, NotAuthorized } from '../components'
import { fetchSession } from '../features/session/redux/actions'

const mapStateToProps = (state) => {
  return {
    session: state.session,
  }
}

@connect(mapStateToProps)
export default class Admin extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  componentWillMount() {
    const { dispatch } = this.props
    if(!localStorage.getItem('access_token')) {
      return dispatch(push('/signin'))
    }
    dispatch(fetchSession())
  }

  navs = () => {
    return config.navs
  }

  render() {
    if (!this.props.session.session || this.props.session.fetchPending) {
      return <div></div>
    }
    if (this.props.session.session.role !== 'admin') {
      return (
        <div className="container">
          <NotAuthorized />
        </div>
      )
    }
    return (
      <div>
        <AdminHeader session={this.props.session.session} />
        <Sidebar items={this.navs()}/>
        <ContainerWrapper {...this.props} />
      </div>
    )
  }
}
