import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Table, Row, Col, Icon,
	message, Modal, Radio, Select
} from 'antd';

import { ActionBar, Breadcrumb } from '../components'

import * as CategoryActions from './redux/actions';

import config from '../config';

const confirm = Modal.confirm;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

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
      maxResults: this.state.pageSize,
      includes: 'creator,parent'
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
    key: 'level',
    render: (text, record) => {
      const context = { categoryActions: this.props.categoryActions, record: record },
            name = 'Level ' + text;
      return (
        <Select defaultValue={name} style={{width: '100%'}} onChange={this.handleLevelChanged.bind(context)}>
          {this.buildLevelOptions()}
        </Select>
      )
    }
  }, {
    title: '父类',
    dataIndex: 'parent.name',
    key: 'parent.name',
    render: (text, record) => {
      const context = { categoryActions: this.props.categoryActions, record: record };
      return (
        <Select defaultValue={text} style={{width: '100%'}} onChange={this.handleParentChanged.bind(context)}>
          {this.buildParentOptions()}
        </Select>
      )
    }
  }, {
    title: '创建人',
    dataIndex: 'creator.name',
    key: 'creator.name'
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

  buildParentOptions() {
    return _.map(this.props.categories.list, (c) => {
      const id = c.id.toString();
      return <Option key={id} value={id}>{c.name}</Option>
    })
  }

  buildLevelOptions() {
    return _.map(config.levels, (level, index) => {
      const id = level.toString();
      return <Option key={id} value={id}>Level {id}</Option>
    })
  }

  handleParentChanged(parentId) {
    this.categoryActions.modify({parentId}, {id: this.record.id, parent: this.record.parent, creator: this.record.creator});
  }

  handleLevelChanged(level) {
    this.categoryActions.modify({level}, {id: this.record.id, parent: this.record.parent, creator: this.record.creator});
  }

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

  actionBarConfig = {
    add: {
      switch: true,
      buttonText: '新建',
      to: '/admin/categories/create'
    },
    search: {
      placeholder: '请输入名称搜索',
      onSearch: (v) => {
        let params = {
          sort: '-createdAt',
          onDelete: 'no',
          includes: 'creator,parent'
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
				isDelete: 'no',
        includes: 'creator,parent'
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
				isDelete: 'no',
        includes: 'creator,parent'
			}

			this.props.categoryActions.fetch(params);
    },
  }

  render() {
    this.pagination.total = this.props.categories.count;
    return (
      <div>
        <Breadcrumb items={this.breadCrumbs} />
        <ActionBar {...this.actionBarConfig} />
        <Table
          rowKey="id"
          pagination={this.pagination}
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
