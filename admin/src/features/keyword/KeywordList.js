import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import addContentHeader from '../../util/addContentHeader'

import config from '../../config'
import libs from '../../util/libs'

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
  Col,
  DatePicker
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const Confirm = Modal.confirm

import { KeywordActions } from '../team/redux/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session,
    keywords: state.keywords,
    q: ownProps.location.query.q
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keywordAction: bindActionCreators(KeywordActions, dispatch),
    dispatch,
  }
}

const breadCrumbs = [{
  name: '首页',
  icon: 'dashboard'
}, {
  name: '关键词列表'
}]

@addContentHeader(breadCrumbs)
@connect(mapStateToProps, mapDispatchToProps)
export default class KeywordList extends Component {

  constructor(props) {
    super(props)
    this.onShowSizeChange = this.onShowSizeChange.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  static propTypes = {
    children: PropTypes.node,
  }

  state = Object.assign({}, {
    teamId: libs.getCurrentTeamId(),
    current: 1,
    pageSize: 10
  }, this.props.state)

  componentWillMount() {
    let params = {
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize,
      'expiredAt_gt': moment().toISOString(),
      sort: '-createdAt'
    }
    if (this.props.q && this.props.q !== '') {
      params.name = this.props.q
    }
    let teamId = libs.getCurrentTeamId()
    this.props.keywordAction.fetch(params, { teamId: teamId })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keywords.error) {
      message.error(nextProps.keywords.error)
    }
  }

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '过期时间',
    dataIndex: 'expiredAt',
    key: 'expiredAt',
    render: (text, record) => (<span>{moment(record.expiredAt).format(config.timeFormat)}</span>)
  }, {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => (<span>{moment(record.createdAt).format(config.timeFormat)}</span>)
  }, {
    title: '操作',
    dataIndex: 'operation',
    render: (text, record) => {
      const context = {keywordId: record.id, keywordAction: this.props.keywordAction}
      return (
        <span>
          <a onClick={this.handleRemoveKeyword.bind(context)}>移除关键词</a>
        </span>
      )
    }
  }]

  disabledDate(current) {
    return current && current.valueOf() < Date.now();
  }


  handleRemoveKeyword() {

    let _this = this

    Confirm({
      title: '确认删除',
      content: '确认删除该条记录？',
      onOk() {
        _this.keywordAction.remove({
          id: _this.keywordId
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
          label="过期时间："
          required>
          {getFieldDecorator('expiredAt') (
            <DatePicker disabledDate={this.disabledDate} placeholder="请选择过期时间" style={{width: '100%'}} format="YYYY-MM-DD"/>
          )}
        </FormItem>
      </Form>
    )

  }

  handleAddKeyword = (err, info, form) => {
    if (err) {
      message.error(err)
      return false
    }
    this.props.keywordAction.add(info, {teamId: this.state.teamId})
    return true
  }

  handleSearch = (info) => {

    let url = '/admin/keywords',
        params = {
          maxResults: 100,
          expiredAt_gt: moment().toISOString(),
        }

    if (info.q && info.q !== '') {
      params.name = info.q
      url += `?q=${info.q}`
    }

    this.props.dispatch(push(url))

    let teamId = libs.getCurrentTeamId()

    this.props.keywordAction.fetch(params, {teamId: teamId})

    return false
  }

  handleTeamChange = (value) => {

    let params = {
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize,
      expiredAt_gt: moment().toISOString(),
    }

    let teamId = value

    this.setState({
      teamId: value
    })

    this.props.keywordAction.fetch(params, {teamId})

  }

  onShowSizeChange(current, pageSize) {
    let params = {
      startIndex: (current - 1) * pageSize,
      maxResults: pageSize,
      expiredAt_gt: moment().toISOString(),
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

    this.props.keywordAction.fetch(params, {teamId: this.state.teamId})
  }

  onChange(current) {
    const { pageSize } = this.state

    let params = {
      startIndex: (current - 1) * pageSize,
      maxResults: pageSize,
      expiredAt_gt: moment().toISOString(),
      sort: '-createdAt',
      isDelete: 'no'
    }

    if (this.props.q && this.props.q != '') {
      params.name = this.props.q
    }

    this.setState({
      current
    })

    this.props.keywordAction.fetch(params, {teamId: this.state.teamId})
  }

  render() {

    const searchBarConfig = {
      labelText: '',
      searchPlaceholder: '请输入名称查询',
      handleSearch: this.handleSearch,
      buttonText: '搜索',
      q: this.props.q
    }

    const addKeywordConfig = {
      buttonText: '创建',
      modalTitle: '创建关键词',
      handleSubmit: this.handleAddKeyword,
      renderForm: this.renderForm
    }

    const teamOptions = _.map(this.props.session.session.joins, j => {
      let id = j.id.toString()
      return <Option key={id} value={id}>{j.name}</Option>
    })

    const defaultTeamId = libs.getCurrentTeamId().toString()

    const pagination = {
      total: this.props.keywords.count,
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
            <Col className="gutter-row" span={13} offset={1}>
              <div className="gutter-box">
                <Select defaultValue={defaultTeamId} onChange={this.handleTeamChange}>
                  {teamOptions}
                </Select>
              </div>
            </Col>
            <Col className="gutter-row" span={2} offset={2}>
              <div className="gutter-box">
                <FormModal {...addKeywordConfig} />
              </div>
            </Col>
          </Row>
        </Card>
        <Table dataSource={this.props.keywords.list} columns={this.columns} pagination={pagination} />
      </div>
    )
  }
}
