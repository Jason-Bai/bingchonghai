import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Table, Card, Breadcrumb, Row,
  Col, Form, Input, Icon,
  Select, message
} from 'antd';

import { ActionBar } from '../components'

import * as UserActions from './redux/actions';

const FormItem = Form.Item;
const Option = Select.Option;

class UserList extends Component {

  constructor(props) {
    super(props);
  }

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

  handleCreate = (err, values) => {
    if (err) {
      const errMsg = "Error: " + err;
      message.error(errMsg);
      return
    }
    return this.props.userActions.create(values)
  }

  actionBarConfig = {
    add: {
      modalTitle: '创建用户',
      okText: '创建',
      buttonText: '新建',
      formItems: this.formItems,
      handleCreate: this.handleCreate
    }
  }


  formItems(form) {

    const { getFieldDecorator } = form, formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    return (
      <div className="form-items">
        <FormItem
          {...formItemLayout}
          label="Name: "
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, min: 2, max: 30, message: 'Please input your name!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="E-mail: "
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password: "
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, min: 8, max: 20, message: 'Please input your password!'
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
      </div>
    )

  }

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
        <ActionBar {...this.actionBarConfig} />
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
