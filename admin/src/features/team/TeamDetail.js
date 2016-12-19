import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import addContentHeader from '../../util/addContentHeader'

import {
  FormModal,
  Layout
} from '../../components'

import {
  Table,
  Card,
  Form,
  Input,
  Tabs,
  Row,
  Col,
  Button
} from 'antd'

const FormItem = Form.FormItem

const TabPane = Tabs.TabPane


import { TeamActions } from './redux/actions'

import EmployeeList from './EmployeeList'

import KeywordList from './KeywordList'

const mapStateToProps = (state, ownProps) => {
  return {
    team: state.teams,
    params: ownProps.params
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    teamAction: bindActionCreators(TeamActions, dispatch),
  }
}

// 面包屑
const breadCrumbs = [{
  name: '首页',
  icon: 'dashboard'
}, {
    name: '团队列表'
  }, {
    name: '团队详情'
  }]

@addContentHeader(breadCrumbs)
@connect(mapStateToProps, mapDispatchToProps)
export default class TeamDetail extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  componentWillMount() {
    const { params, teamAction } = this.props
    teamAction.fetch({
      includes: 'creator',
      maxResults: 100,
      id: params.teamId
    })
  }

  render() {

    const team = this.props.team.list[0] || null

    return (
      <div className="content">
        <Tabs defaultActiveKey="1">
          <TabPane tab="团队" key="1">
            { team && (
              <Card title={team.name + ' / ' + team.advertiser}>
                <Row gutter={16}>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      姓名: {team.name}
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      广告商: {team.advertiser}
                    </div>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      平台: {team.queryTypes.join(',') }
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      创建人: {team.creator.name}
                    </div>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      创建时间: {team.createdAt}
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      创建人: {team.expiredAt}
                    </div>
                  </Col>
                </Row>
              </Card>
            ) }
            {!team && (
              <div>Team not found!</div>
            )}
          </TabPane>
          <TabPane tab="团队成员" key="2">
            <EmployeeList {...this.props} />
          </TabPane>
          <TabPane tab="舆情关键词" key="3">
            <KeywordList {...this.props} />
          </TabPane>
          <TabPane tab="微博授权帐号" key="4">
            微博授权帐号列表
          </TabPane>
          <TabPane tab="微博监控帐号" key="5">
            微博监控帐号列表
          </TabPane>
          <TabPane tab="微信授权帐号" key="6">
            微信授权帐号列表
          </TabPane>
        </Tabs>
        <Row gutter={16}>
          <Col className="gutter-row" span={2} offset={22}>
            <div className="gutter-box">
              <Link to="/admin/teams">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
