import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'

import config from '../../config'

import { FilterNav, FormModal, SearchBar } from '../../components'

import { KeywordActions } from './redux/actions'

import {
  Table,
  Card,
  Form,
  Input,
  message,
  Row,
  Col,
  Select,
  Modal,
  DatePicker
} from 'antd'

const ec = encodeURIComponent
const FormItem = Form.Item
const Option = Select.Option
const Confirm = Modal.confirm


const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session,
    keywords: state.keywords,
    error: state.keywords.error,
    pendding: state.keywords.pendding
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    keywordAction: bindActionCreators(KeywordActions, dispatch),
    dispatch
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class KeywordList extends Component {

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
      includes: 'creator',
      isDelete: 'no',
      expiredAt_gt: moment().toISOString(),
      sort: '-createdAt',
    }

    if (this.props.q && this.props.q !== '') {
      params.name = this.props.q
    }

    this.props.keywordAction.fetch(params, {
      teamId: this.props.params.teamId
    })
  }

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '名称',
    dataIndex: 'name'
  }, {
    title: '过期时间',
    dataIndex: 'expiredAt',
    key: 'expiredAt',
    render: (text, record) => (
      <span>{moment(record.expiredAt).format(config.dateFormat)}</span>
    )
  }, {
    title: '创建人',
    dataIndex: 'creator.name',
    key: 'creator.name',
    render: (text, record) => {
      let creator
      if (record.creator) {
        creator = record.creator
      } else {
        creator = this.props.session.session
      }
      const link = `/admin/users/${creator.id}`
      return <Link to={link} target="_blank">{creator.name}</Link>
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
      const context = { keywordId: record.id, teamId: this.props.params.teamId, keywordAction: this.props.keywordAction }
      return (
        <span><a onClick={this.handleRemoveKeyword.bind(context)}>移除关键词</a></span>
      )
    }
  }]

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

  disabledDate(current) {
    return current && current.valueOf() < Date.now();
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
          label="过期时间："
          required>
          {getFieldDecorator('expiredAt') (
            <DatePicker disabledDate={this.disabledDate} placeholder="请选择过期时间" style={{width: '100%'}}/>
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
    info.name = info.name.trim()
    this.props.keywordAction.add(info, {teamId: this.props.params.teamId})
    return true
  }

  handleSearch = (info) => {

    let params = {
      includes: 'creator',
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize
    }

    if (info.q && info.q !== '') {
        params.name =  info.q
    }

    this.props.keywordAction.fetch(params, {
        teamId: this.props.params.teamId
    })

  }

  onShowSizeChange(current, pageSize) {

    let params = {
      startIndex: (current - 1) * this.state.pageSize,
      maxResults: pageSize,
      includes: 'creator',
      isDelete: 'no',
      expiredAt_gt: moment().toISOString(),
      sort: '-createdAt',
    }

    if (this.props.q && this.props.q != '') {
      params.name = this.props.q
    }

    this.setState({
      current,
      pageSize
    })

    this.props.keywordAction.fetch(params, {
      teamId: this.props.params.teamId
    })

  }

  onChange(current) {
    const { pageSize } = this.state

    let params = {
      startIndex: (current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize,
      includes: 'creator',
      isDelete: 'no',
      expiredAt_gt: moment().toISOString(),
      sort: '-createdAt',
    }

    if (this.props.q && this.props.q != '') {
      params.name = this.props.q
    }

    this.setState({
      current
    })

    this.props.keywordAction.fetch(params, {
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

    const addKeywordConfig = {
      buttonText: '创建',
      modalTitle: '创建关键词',
      renderForm: this.renderForm,
      handleSubmit: this.handleAddKeyword
    }

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
            <Col className="gutter-row" span={12} offset={2}>
              <div className="gutter-box">
              </div>
            </Col>
            <Col className="gutter-row" span={2} offset={2}>
              <FormModal {...addKeywordConfig}></FormModal>
            </Col>
          </Row>
        </Card>
        <Table dataSource={this.props.keywords.list} columns={this.columns} pagination={pagination} />
      </div>
    )
  }
}


