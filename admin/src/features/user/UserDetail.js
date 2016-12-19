import React, { Component } from 'react'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { Link } from 'react-router'

import * as UserActions from './redux/actions'

import {
  Card,
  Row,
  Col,
  Button
} from 'antd'

import config from '../../config'

import addContentHeader from '../../util/addContentHeader'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userAction: bindActionCreators(UserActions, dispatch)
  }
}


const breadCrumbs = [{
  name: '首页',
  icon: 'dashboard'
}, {
  name: '用户列表'
}, {
  name: '用户详情'
}]

@addContentHeader(breadCrumbs)
@connect(mapStateToProps, mapDispatchToProps)
export default class UserDetail extends Component {

  componentWillMount() {

    let params = {
      id: this.props.params.userId
    }

    this.props.userAction.fetch(params)

  }

  render() {

    const user = this.props.user.list[0] || null

    return (
      <div className="content">
        {user && (
          <Card title={user.name}>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  邮箱: {user.email}
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  姓名: {user.name}
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  角色: {user.role === 'admin' ? '管理员' : '普通成员'}
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  语言: {user.language === 'zh' ? '中文' : '英文'}
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  状态: {user.status === 'enabled' ? '启用' : '禁用'}
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  创建时间: {moment(user.createdAt).format(config.timeFormat)}
                </div>
              </Col>
            </Row>
          </Card>
        )}
        {!user && (
          <div>User not found!</div>
        )}
        <Row gutter={16}>
          <Col className="gutter-row" span={2} offset={22}>
            <div className="gutter-box">
              <Link to="/admin/users" alt="用户管理">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    )

  }

}
