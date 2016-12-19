import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import addContentHeader from '../../util/addContentHeader'

import config from '../../config'

import { FilterNav, FormModal, SearchBar } from '../../components'

import {
  Table,
  Card,
  Form,
  Input,
  message,
  Tag,
  Select,
  Modal,
  Row,
  Col
} from 'antd'

const ec = encodeURIComponent

const FormItem = Form.Item
const Option = Select.Option
const Confirm = Modal.confirm

import * as UserActions from './redux/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session,
    users: state.users,
    q: ownProps.location.query.q
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(UserActions, dispatch),
    dispatch,
  }
}

const breadCrumbs = [{
  name: '首页',
  icon: 'dashboard'
}, {
  name: '用户列表'
}]

@addContentHeader(breadCrumbs)
@connect(mapStateToProps, mapDispatchToProps)
export default class UserList extends Component {

  constructor(props) {
    super(props)
    this.onShowSizeChange = this.onShowSizeChange.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  static propTypes = {
    children: PropTypes.node,
  }

  state = Object.assign({}, {
    current: 1,
    pageSize: 10
  }, this.props.state)

  componentWillMount() {
    let params = {
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize,
      sort: '-createdAt',
      isDelete: 'no'
    }
    if (this.props.q && this.props.q !== '') {
      params.name = this.props.q
    }
    this.props.userAction.fetch(params)
  }

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    render: (text, record) => {
      const link = `/admin/users/${record.id}`
      return <Link to={link} alt={record.name}>{record.name}</Link>
    }
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
    render: (text, record) => {
      const context = { userId: record.id, userAction: this.props.userAction }
      return (
        <div key={record.id}>
          <Select defaultValue={record.role} style={{ width: 100 }} onChange={this.handleChangeRole.bind(context)}>
            <Option value="admin">管理员</Option>
            <Option value="member">普通成员</Option>
          </Select>
        </div>
      )
    }
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => {
      const context = { userId: record.id, userAction: this.props.userAction }
      return (
        <div key={record.id}>
          <Select defaultValue={record.status} style={{ width: 100 }} onChange={this.handleChangeStatus.bind(context)}>
            <Option value="enabled">启用</Option>
            <Option value="disabled">禁用</Option>
          </Select>
        </div>
      )
    }
  }, {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => (<span>{moment(record.createdAt).format(config.timeFormat)}</span>)
  }, {
    title: '语言',
    dataIndex: 'language',
    key: 'language',
    render: (text, record) => (<span>{record.language === 'zh' ?  '中文' : '英文' }</span>)
  }, {
    title: '操作',
    dataIndex: 'operation',
    render: (text, record) => {
      const context = {userId: record.id, userAction: this.props.userAction}
      return (
        <span>
          <a onClick={this.handleRemoveUser.bind(context)}>移除用户</a>
        </span>
      )
    }
  }]

  handleChangeRole(value) {
    this.userAction.modify({role: value}, {id: this.userId})
  }

  handleChangeStatus(value) {
    this.userAction.modify({status: value}, {id: this.userId})
  }

  handleRemoveUser() {

    let _this = this

    Confirm({
      title: '确认删除',
      content: '确认删除该条记录？',
      onOk() {
        _this.userAction.remove({
          id: _this.userId
        })
      },
      onCancel() {

      }
    })

  }

  renderForm = (form) => {

    const { getFieldDecorator, getFieldError, isFieldValidating } = form

    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    }

    const nameOptions = {
      rules: [
        { required: true, min: 2, max: 30, message: '名称长度介于2到30个字符' }
      ]
    }

    const emailOptions = {
      validate: [{
        rules: [
          { required: true },
        ],
        trigger: 'onBlur'
      }, {
        rules: [
          { type: 'email', message: '请输入正确邮箱' },
        ],
        trigger: ['onBlur', 'onChange']
      }],
    }

    return (
      <Form horizontal>
        <FormItem
          {...formItemLayout}
          label="名称："
          hasFeedback
          help={isFieldValidating('name') ? 'validating...' : (getFieldError('name') || []).join(', ')}>
            {getFieldDecorator('name', nameOptions) (
              <Input placeholder="Please input the name" type="text" autoComplete="off" />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱："
          hasFeedback>
          {getFieldDecorator('email', emailOptions) (
            <Input placeholder="Please input the email" type="email" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="角色："
          required>
          {getFieldDecorator('role', {initialValue: 'member'}) (
            <Select>
              <Option value="member">普通用户</Option>
              <Option value="admin">管理员</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="状态："
          required>
          {getFieldDecorator('status', {initialValue: 'enabled'}) (
            <Select>
              <Option value="enabled">启用</Option>
              <Option value="disabled">禁用</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="语言："
          required>
        {getFieldDecorator('language', {initialValue: 'zh'}) (
          <Select>
            <Option value="zh">中文</Option>
            <Option value="en">英文</Option>
          </Select>
        )}
        </FormItem>
      </Form>
    )

  }

  handleAddUser = (err, info, form) => {
    if (err) {
      message.error(err)
      return false
    }
    this.props.userAction.add(info)
    return true
  }

  handleSearch = (info) => {
    let url = '/admin/users',
        params = {
          startIndex: (this.state.current - 1) * this.state.pageSize,
          maxResults: this.state.pageSize
        }

    if (info.q && info.q !== '') {
      params.name = info.q
      url += `?q=${info.q}`
    }

    this.props.dispatch(push(url))

    this.props.userAction.fetch(params)

    return false
  }

  onShowSizeChange(current, pageSize) {

    let params = {
      startIndex: (current - 1) * pageSize,
      maxResults: pageSize,
      sort: '-createdAt',
      isDelete: 'no'
    }

    if (this.props.q && this.props.q != '') {
      params.name = this.props.q
    }

    this.setState({
      current,
      pageSize
    })

    this.props.userAction.fetch(params)

  }

  onChange(current) {
    const { pageSize } = this.state

    let params = {
      startIndex: (current - 1) * pageSize,
      maxResults: pageSize,
      sort: '-createdAt',
      isDelete: 'no'
    }

    if (this.props.q && this.props.q != '') {
      params.name = this.props.q
    }

    this.setState({
      current
    })

    this.props.userAction.fetch(params)
  }

  render() {

    const searchBarConfig = {
      labelText: '',
      searchPlaceholder: '请输入用户姓名查询',
      handleSearch: this.handleSearch,
      buttonText: '搜索',
      q: this.props.q
    }

    const addUserConfig = {
      buttonText: '创建',
      modalTitle: '创建用户',
      handleSubmit: this.handleAddUser,
      renderForm: this.renderForm
    }

    const pagination = {
      total: this.props.users.count,
      showSizeChanger: true,
      onShowSizeChange: this.onShowSizeChange,
      onChange: this.onChange
    }


    return (
      <div className="content">
        <Card>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <SearchBar {...searchBarConfig} />
              </div>
            </Col>
            <Col className="gutter-row" span={12} offset={2}>
              <div className="gutter-box">
              </div>
            </Col>
            <Col className="gutter-row" span={2} offset={2}>
              <div className="gutter-box">
                <FormModal {...addUserConfig} />
              </div>
            </Col>
          </Row>
        </Card>
        <Table dataSource={this.props.users.list} columns={this.columns} pagination={pagination} />
      </div>
    )
  }
}
