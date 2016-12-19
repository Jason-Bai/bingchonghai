import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'

import config from '../../config'

import { FilterNav, FormModal, SearchBar } from '../../components'

import { EmployeeActions } from './redux/actions'

import {
  Table,
  Card,
  Form,
  Input,
  message,
  Row,
  Col,
  Select,
  Modal
} from 'antd'

const ec = encodeURIComponent
const FormItem = Form.Item
const Option = Select.Option
const Confirm = Modal.confirm


const mapStateToProps = (state, ownProps) => {
  return {
    employees: state.employees,
    error: state.employees.error,
    pendding: state.employees.pendding
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    employeeAction: bindActionCreators(EmployeeActions, dispatch),
    dispatch
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class EmployeeList extends Component {

  constructor(props) {
    super(props)
    this.onShowSizeChange = this.onShowSizeChange.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  static propTypes = {
    children: PropTypes.node
  }

  state = Object.assign({}, {
    current: 1,
    pageSize: 10
  }, this.props.state)

  componentWillMount() {

    let params = {
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize,
      includes: 'user',
      isDelete: 'no',
      sort: '-createdAt'
    }

    if (this.props.q && this.props.q !== '') {
      params.name = this.props.q
    }

    this.props.employeeAction.fetch(params, {
      teamId: this.props.params.teamId
    })
  }

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '名称',
    dataIndex: 'user.name',
    key: 'user.name',
    render: (text, record) => {
      const link = `/admin/users/${record.user.id}`
      return <Link to={link} target="_blank">{record.user.name}</Link>
    }
  },  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
    render: (text, record) => {
      const context = { employeeId: record.id, employeeAction: this.props.employeeAction }
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
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => (
      <span>{moment(record.createdAt).format(config.timeFormat)}</span>
    )
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => {
      const context = { employeeId: record.id, employeeAction: this.props.employeeAction }
      return (
        <span><a onClick={this.handleRemoveEmployee.bind(context)}>移除成员</a></span>
      )
    }
  }]

  handleChangeRole(value) {
    this.employeeAction.modify({role: value}, {id: this.employeeId})
  }

  handleRemoveEmployee() {

    let _this = this

    Confirm({
      title: '确认删除',
      content: '确认删除该条记录？',
      onOk() {
        _this.employeeAction.remove({
          id: _this.employeeId
        })
      },
      onCancel() {

      }
    })
  }

  renderForm = (form) => {

    const { getFieldDecorator, getFieldError, isFieldValidating } = form

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 }
    };

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
      <Form>
        <FormItem
          {...formItemLayout}
          label="名   称："
          hasFeedback
          help={isFieldValidating('name') ? 'validating...' : (getFieldError('name') || []).join(', ')}>
          {getFieldDecorator('name', nameOptions) (
            <Input placeholder="请输入名称 " type="text" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮   箱："
          hasFeedback>
          {getFieldDecorator('email', emailOptions) (
              <Input placeholder="请输入邮箱" type="email" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="角   色："
          required>
          {getFieldDecorator('role', {initialValue: 'member'}) (
            <Select>
              <Option value="member">普通成员</Option>
              <Option value="admin">管理员</Option>
            </Select>
          )}
        </FormItem>
      </Form>
    )
  }

  handleAddEmployee = (err, info, form) => {
    if (err) {
      message.error(err)
      return false
    }
    info.name = info.name.trim()
    this.props.employeeAction.add(info, {teamId: this.props.params.teamId})
    return true
  }

  handleSearch = (info) => {

    let params = {
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize,
      includes: 'user'
    }

    if (info.q && info.q !== '') {
      params['user.name'] = info.q
    }

    this.props.employeeAction.fetch(params, {
        teamId: this.props.params.teamId
    })

  }

  onShowSizeChange(current, pageSize) {

    let params = {
      startIndex: (current - 1) * pageSize,
      maxResults: pageSize,
      sort: '-createdAt',
      isDelete: 'no',
      includes: 'user'
    }

    if (this.props.q && this.props.q != '') {
      params.name = this.props.q
    }

    this.setState({
      current,
      pageSize
    })

    this.props.employeeAction.fetch(params, {
      teamId: this.props.params.teamId
    })

  }

  onChange(current) {
    const { pageSize } = this.state

    let params = {
      startIndex: (current - 1) * pageSize,
      maxResults: pageSize,
      sort: '-createdAt',
      isDelete: 'no',
      includes: 'user'
    }

    if (this.props.q && this.props.q != '') {
      params.name = this.props.q
    }

    this.setState({
      current
    })

    this.props.employeeAction.fetch(params, {
      teamId: this.props.params.teamId
    })
  }

  render() {

    const searchBarConfig = {
      labelText: '',
      searchPlaceholder: '请输入名称查询',
      handleSearch: this.handleSearch,
      buttonText: '搜索',
      q: this.props.q
    }

    const addEmployeeConfig = {
      buttonText: '创建',
      modalTitle: '创建成员',
      renderForm: this.renderForm,
      handleSubmit: this.handleAddEmployee
    }

    const pagination = {
      total: this.props.employees.count,
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
              <FormModal {...addEmployeeConfig}></FormModal>
            </Col>
          </Row>
        </Card>
        <Table dataSource={this.props.employees.list} columns={this.columns} pagination={pagination} />
      </div>
    )
  }
}


