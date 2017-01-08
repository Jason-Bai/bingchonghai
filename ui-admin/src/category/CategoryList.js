import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Table, Card, Row, Col,
	Form, Input, Icon, Select,
	message, Radio, Modal
} from 'antd';

import { ActionBar, Breadcrumb } from '../components'

import * as CategoryActions from './redux/actions';

import config from '../config';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const confirm = Modal.confirm;


class CategoryList extends Component {

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
    this.props.categoryActions.fetch(params)
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
    title: '等级',
    dataIndex: 'level',
    key: 'level'
  }, {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => {
      return (
        <span>
          {moment(record.createdAt).format(config.timeFormat)}
        </span>
      )
    }
  }, {
    title: '是否删除',
    dataIndex: 'isDelete',
    key: 'isDelete',
    render: (text, record) => {
      const context = {categoryId: record.id, categoryActions: this.props.categoryActions}
      return (
        <RadioGroup defaultValue={record.isDelete} size="small" onChange={this.handleIsDeleteChanged.bind(context)}>
          <RadioButton value="no">No</RadioButton>
          <RadioButton value="yes">Yes</RadioButton>
        </RadioGroup>
      )
    }
  }, {
    title: '操作',
    dataIndex: 'operations',
    key: 'operations',
    className: 'text-center',
    render: (text, record) => {
      const context = {categoryId: record.id, categoryActions: this.props.categoryActions}
      return (
        <div className="operations">
          <Link className="text-red" onClick={this.handleRemove.bind(context)}>
            <Icon type="delete" />
          </Link>
        </div>
      )
    }
  }]

  handleRemove() {
    const _this = this;
	  confirm({
      title: '删除',
      content: '确认删除吗？',
      onOk() {
        _this.categoryActions.remove({id: _this.categoryId})
      },
      onCancel() {},
    });
  }

  handleIsDeleteChanged(e) {
    e.preventDefault();
    const isDelete = e.target.value;
    this.categoryActions.modify({isDelete}, {id: this.categoryId});
  }

  handleCreate = (err, values) => {
    if (err) {
      const errMsg = "Error: " + err;
      message.error(errMsg);
      return
    }
    return this.props.categoryActions.create(values)
  }

  actionBarConfig = {
    add: {
      modalTitle: '创建用户',
      okText: '创建',
      buttonText: '新建',
      formItems: this.formItems,
      handleCreate: this.handleCreate
    },
    search: {
      placeholder: '请输入名称搜索',
      onSearch: (v) => {
        let params = {
					startIndex: (this.state.current - 1) * this.state.pageSize,
					maxResults: this.state.pageSize,
          sort: '-createdAt',
          onDelete: 'no'
        };
        if (v) {
          params.name = v;
        }
        this.props.categoryActions.fetch(params).then(() => {
          $('.ant-input-search').val('')
        })
      }
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
          label="Level: "
          hasFeedback
        >
          {getFieldDecorator('level', {
            rules: [{
              required: true, message: 'Please select a level!',
            }],
            initialValue: '0'
          })(
            <Select>
              <Option value="0">0</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="父类: "
          hasFeedback
        >
          {getFieldDecorator('parentId', {
            rules: [{
              required: true, message: 'Please select a fatherl!',
            }],
            initialValue: '0'
          })(
            <Select>
              <Option value="1">哈哈</Option>
            </Select>
          )}
        </FormItem>
      </div>
    )
  }

  breadCrumbs = [{
    name: 'Home',
    icon: 'home',
    to: '/'
  }, {
    name: '分类列表',
    icon: 'tags-o',
    to: '/admin/categories'
  }]

  pagination = {
    total: this.props.categories.count,
    showSizeChanger: true,
    onShowSizeChange: (current, pageSize) => {
			this.setState({
				current,
				pageSize
			})

			const params = {
				startIndex: (current - 1) * pageSize,
				maxResults: pageSize,
				sort: '-createdAt',
				isDelete: 'no'
			}

			this.props.categoryActions.fetch(params);
    },
    onChange: (current) => {
			this.setState({
				current
			})

			const params = {
				startIndex: (current - 1) * this.state.pageSize,
				maxResults: this.state.pageSize,
				sort: '-createdAt',
				isDelete: 'no'
			}

			this.props.categoryActions.fetch(params);
    },
  }

  render() {
    return (
      <div>
        <Breadcrumb items={this.breadCrumbs} />
        <ActionBar {...this.actionBarConfig} />
        <Table
          rowKey="id"
          dataSource={this.props.categories.list}
          columns={this.columns}
          size="middle"
          bordered />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(CategoryActions, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
