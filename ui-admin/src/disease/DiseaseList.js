import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Table, Row, Col, Icon,
	message, Modal, Radio, Select
} from 'antd';

import { ActionBar, Breadcrumb } from '../components'

import * as DiseaseActions from './redux/actions';
import * as CategoryActions from '../category/redux/actions';

import config from '../config';

const confirm = Modal.confirm;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class DiseaseList extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    current: 1,
    pageSize: 10
  }

  componentWillMount() {
    const diseaseParams = {
      sort: '-createdAt',
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize,
      includes: 'creator,category'
    }, categoryParams = {
      sort: '-createdAt',
      startIndex: 0,
      maxResults: 500
    }

    this.props.diseaseActions.fetch(diseaseParams)

    this.props.categoryActions.fetch(categoryParams)
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
		title: '分类',
		dataIndex: 'category.name',
	  key: 'category.name',
		render: (text, record) => {
			const context = {record: record, diseaseActions: this.props.diseaseActions};
			return (
				<Select defaultValue={text} onChange={this.handleCategoryChanged.bind(context)} style={{width: '100%'}}>
					{this.buildCategoryOptions()}
				</Select>
			)
		}
	}, {
    title: '创建人',
    dataIndex: 'creator.name',
    key: 'creator.name',
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
    },
  }, {
    title: '操作',
    dataIndex: 'operations',
    key: 'operations',
    className: 'text-center',
    render: (text, record) => {
      const context = {diseaseId: record.id, diseaseActions: this.props.diseaseActions}
      return (
        <div className="operations">
          <Link className="text-red" onClick={this.handleRemove.bind(context)}>
            <Icon type="delete" />
          </Link>
        </div>
      )
    }
  }]

  buildCategoryOptions = () => {
    return _.map(this.props.categories.list, (category) => {
      const id = category.id.toString();
      return <Option key={id} value={id}>{category.name}</Option>
    })
  }

  handleCategoryChanged(categoryId) {
    this.diseaseActions.modify({categoryId}, {id: this.record.id, category: this.record.category, creator: this.record.creator});
  }

  handleRemove() {
    const _this = this;
	  confirm({
      title: '删除',
      content: '确认删除吗？',
      onOk() {
        _this.diseaseActions.remove({id: _this.diseaseId})
      },
      onCancel() {},
    });
  }

  actionBarConfig = {
    add: {
      switch: true,
      buttonText: '新建',
      to: '/admin/diseases/create'
    },
    search: {
      placeholder: '请输入名称搜索',
      onSearch: (v) => {
        let params = {
					startIndex: (this.state.current - 1) * this.state.pageSize,
					maxResults: this.state.pageSize,
          sort: '-createdAt',
          onDelete: 'no',
					includes: 'creator,category'
        };
        if (v) {
          params.name = v;
        }
        this.props.diseaseActions.fetch(params).then(() => {
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
    name: '病害列表',
    icon: 'tags',
    to: '/admin/diseases'
  }]

  pagination = {
    total: this.props.diseases.count,
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
				includes: 'creator,category'
			}

			this.props.diseaseActions.fetch(params);
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
				includes: 'creator,category'
			}

			this.props.diseaseActions.fetch(params);
    },
  }

  render() {
    this.pagination.total = this.props.diseases.count;
    return (
      <div>
        <Breadcrumb items={this.breadCrumbs} />
        <ActionBar {...this.actionBarConfig} />
        <Table
          rowKey="id"
          pagination={this.pagination}
          dataSource={this.props.diseases.list}
          columns={this.columns}
          size="middle"
          bordered />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    diseases: state.diseases,
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    diseaseActions: bindActionCreators(DiseaseActions, dispatch),
    categoryActions: bindActionCreators(CategoryActions, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseList);
