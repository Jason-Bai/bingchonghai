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
  Row,
  Col,
  DatePicker,
  Checkbox,
  Select,
  Modal
} from 'antd'

const ec = encodeURIComponent
const FormItem = Form.Item
const Option = Select.Option
const CheckboxGroup = Checkbox.Group
const Confirm = Modal.confirm


import { TeamActions } from './redux/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session,
    teams: state.teams,
    q: ownProps.location.query.q,
    error: state.teams.error,
    pendding: state.teams.pendding
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    teamAction: bindActionCreators(TeamActions, dispatch),
    dispatch
  }
}

// 面包屑
const breadCrumbs = [{
  name: '首页',
  icon: 'dashboard'
}, {
  name: '团队列表'
}]

@addContentHeader(breadCrumbs)
@connect(mapStateToProps, mapDispatchToProps)
export default class TeamList extends Component {

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
      includes: 'creator,owner',
      maxResults: 100,
      sort: '-createdAt',
      isDelete: 'no',
    }
    if (this.props.q && this.props.q !== '') {
      params.name = this.props.q
    }
    this.props.teamAction.fetch(params)
  }

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      const link = `/admin/teams/${record.id}`
      return <Link to={link}>{record.name}</Link>
    }
  }, {
    title: '合作商',
    dataIndex: 'advertiser',
    key: 'advertiser'
  }, {
    title: '数据平台',
    dataIndex: 'queryTypes',
    key: 'queryTypes',
    render: (text, record) => {
      const context = { teamId: record.id, teamAction: this.props.teamAction },
            queryTypes = record.queryTypes,
            children = config.queryPlatforms.map(qt => {
              return <Option key={qt.value} value={qt.value}>{qt.label}</Option>
            })
      return (
        <Select
          multiple
          style={{width:'70px'}}
          size="small"
          placeholder="请选择类型"
          defaultValue={queryTypes}
          onChange={this.handleChangeQueryTypes.bind(context)}>
          {children}
        </Select>
      )
    }
  }, {
    title: '拥有者',
    dataIndex: 'owner.name',
    key: 'owner.name',
    render: (text, record) => {
      let owner
      if (record.owner) {
        owner = record.owner
      } else {
        owner = this.props.session.session
      }
      const link = `/admin/users/${owner.id}`
      return <Link to={link} target="_blank">{owner.name}</Link>
    }
  }, {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => (
      <span>{moment(record.createdAt).format(config.timeFormat)}</span>
    )
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => {
      const context = { teamId: record.id, teamAction: this.props.teamAction }
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
    title: '操作',
    key: 'operation',
    render: (text, record) => {
      const context = { teamId: record.id, teamAction: this.props.teamAction }
      return (
        <span><a onClick={this.handleRemoveTeam.bind(context)}>移除团队</a></span>
      )
    }
  }]

  disabledDate(current) {
    return current && current.valueOf() < Date.now();
  }

  renderForm = (form) => {

    const { getFieldDecorator, getFieldError, isFieldValidating } = form

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 }
    };

    const nameFieldOptions = {
      rules: [
        { required: true, min: 2, max: 30, message: '名称长度介于2到30个字符' }
      ]
    }

    const advertiserFieldOptions = {
      rules: [
        { required: true, min: 2, max: 30, message: '名称长度介于2到30个字符' }
      ]
    }

    const ownerNameFieldOptions = {
      rules: [
        { required: true, min: 2, max: 30, message: '名称长度介于2到30个字符' }
      ]
    }

    const emailFieldOptions = {
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

    const queryTypesFieldOptions = {
      rules: [{
        required: true
      }]
    }

    let queryTypesOptions = _.map(config.queryPlatforms, qt => {
      return <Option key={qt.value} value={qt.value}>{qt.label}</Option>
    })

    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="名   称："
          hasFeedback
          help={isFieldValidating('name') ? 'validating...' : (getFieldError('name') || []).join(', ')}>
          {getFieldDecorator('name', nameFieldOptions) (
            <Input placeholder="请输入团队名称" type="text" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="广告主："
          hasFeedback
          help={isFieldValidating('advertiser') ? 'validating...' : (getFieldError('advertiser') || []).join(', ')}>
          {getFieldDecorator('advertiser', advertiserFieldOptions) (
            <Input placeholder="请输入广告主名称" type="text" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="拥有者："
          hasFeedback
          help={isFieldValidating('ownerName') ? 'validating...' : (getFieldError('ownerName') || []).join(', ')}>
          {getFieldDecorator('ownerName', ownerNameFieldOptions) (
            <Input placeholder="请输入拥有者名称" type="text" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="拥有者邮箱："
          hasFeedback>
          {getFieldDecorator('ownerEmail', emailFieldOptions) (
            <Input placeholder="请输入团队名称" type="email" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="平   台："
          required>
          {getFieldDecorator('queryTypes', queryTypesFieldOptions) (
            <Select multiple>
              {queryTypesOptions}
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="状   态："
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
          label="过期时间："
          required>
          {getFieldDecorator('expiredAt') (
            <DatePicker disabledDate={this.disabledDate} size="large" placeholder="请选择过期时间" style={{width: '100%'}}/>
          )}
        </FormItem>
      </Form>
    )
  }

  handleChangeStatus(value) {
    this.teamAction.modify({status: value}, {id: this.teamId})
  }

  handleChangeQueryTypes(values) {
    this.teamAction.modify({queryTypes: values}, {id: this.teamId})
  }

  handleAddTeam = (err, info, form) => {
    if (err) {
      message.error(err)
      return false
    }
    info.name = info.name.trim()
    info.creatorId = this.props.session.session.id
    this.props.teamAction.add(info)
    return true
  }

  handleRemoveTeam() {

    let _this = this

    Confirm({
      title: '确认删除',
      content: '确认删除该条记录？',
      onOk() {
        _this.teamAction.remove({
          id: _this.teamId
        })
      },
      onCancel() {

      }
    })
  }

  handleSearch = (info) => {
    let url = '/admin/teams',
        params = {
          startIndex: (this.state.current -1) * this.state.pageSize,
          maxResults: this.state.pageSize,
          includes: 'creator,owner',
        }

    if (info.q && info.q !== '') {
      params.name = info.q
      url += `?q=${info.q}`
    }

    this.props.dispatch(push(url))

    this.props.teamAction.fetch(params)

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

    this.props.teamAction.fetch(params)

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

    this.props.teamAction.fetch(params)
  }

  render() {

    const searchBarConfig = {
      labelText: '',
      searchPlaceholder: '请输入团队名称查询',
      handleSearch: this.handleSearch,
      buttonText: '搜索',
      q: this.props.q
    }

    const addTeamConfig = {
      buttonText: '创建',
      modalTitle: '创建团队',
      renderForm: this.renderForm,
      handleSubmit: this.handleAddTeam
    }

    const pagination = {
      total: this.props.teams.count,
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
              <FormModal {...addTeamConfig}></FormModal>
            </Col>
          </Row>
        </Card>
        <Table dataSource={this.props.teams.list} columns={this.columns} pagination={pagination} />
      </div>
    )
  }

}


