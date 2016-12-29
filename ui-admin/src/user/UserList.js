import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Card, Breadcrumb, Row, Col } from 'antd';
import * as UserActions from './redux/actions';

class UserList extends Component {

  state = {
    current: 1,
    pageSize: 10
  }

  componentWillMount() {
    const params = {
      sort: '-createdAt',
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize
    }
    this.props.userActions.fetch(params)
  }

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  }, {
    title: '角色',
    dataIndex: 'role',
    key: 'role'
  }, {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  }]

  render() {
    return (
      <div>
        <Row>
          <Col className="ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item><a href="/admin/users">用户列表</a></Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Table
          dataSource={this.props.users.list}
          columns={this.columns}
          size="middle"
          bordered />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(UserActions, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
