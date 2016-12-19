import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session
  }
}

@connect(mapStateToProps)
export default class Sidebar extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { role } = this.props.session.session

    return (
      <aside className="main-sidebar">
        <section className="sidebar" style={{height: 'auto'}}>
          { role && role === 'member' && (
            <div className="user-panel text-center">
              <a href="javascript:void(0)" className="btn btn-primary btn-block">
                <i className="fa fa-plus" style={{marginRight: '5px', color: '#fff', fontSize: '16px'}}></i>
                <span style={{fontSize: '16px', color: '#fff'}}>新建查询</span>
              </a>
            </div>
          )}
          <ul className="sidebar-menu">
            {this.props.items && this.props.items.map( e => {
              return (
                <li key={`nav-${e.name}`}>
                  <Link to={e.path}>
                    <i className={`fa fa-${e.icon}`}></i><span>{e.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </aside>
    )
  }

}
