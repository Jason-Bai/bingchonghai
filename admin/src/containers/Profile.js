import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import config from '../config'

import { Card, Row, Col, Button } from 'antd'

import { Link } from 'react-router'

const mapStateToProps = (state) => {
  return {
    routing: state.routing,
    session: state.session
  }
}

@connect(mapStateToProps)
export default class Profile extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    if (!this.props.session.session || this.props.session.fetchPending) {
      return <div></div>
    }

    let user = this.props.session.session

    return (
      <div>
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
        <Row gutter={16}>
          <Col className="gutter-row" span={2} offset={22}>
            <div className="gutter-box">
              <Link to="/app" alt="首页">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
