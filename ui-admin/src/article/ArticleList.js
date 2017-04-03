import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Table, Row, Col, Icon,
	message, Modal, Radio, Select
} from 'antd';

import ContentWrapper from '../app/ContentWrapper';

import { ActionBar, Breadcrumb } from '../components'

import * as ArticleActions from './redux/actions';

import config from '../config';

const confirm = Modal.confirm;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class ArticleList extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    current: 1,
    pageSize: 10
  }

  componentWillMount() {
    const articleParams = {
      sort: '-createdAt',
      startIndex: (this.state.current - 1) * this.state.pageSize,
      maxResults: this.state.pageSize,
      includes: 'creator'
    };

    this.props.articleActions.fetch(articleParams);
  }

	columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: '访问量',
    dataIndex: 'visit',
    key: 'visit'
  }, {
    title: '评论量',
    dataIndex: 'comment',
    key: 'comment'
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
      const context = {articleId: record.id, diseaseActions: this.props.diseaseActions},
            previewUrl = `/admin/articles/${record.id}/preview`;
      return (
        <div className="operations">
          <Link to={previewUrl} title="预览">
            <Icon type="eye" />
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
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

  handleRemove() {
    const _this = this;
	  confirm({
      title: '删除',
      content: '确认删除吗？',
      onOk() {
        _this.articleActions.remove({id: _this.diseaseId})
      },
      onCancel() {},
    });
  }

  actionBarConfig = {
    search: {
      placeholder: '请输入名称搜索',
      onSearch: (v) => {
        let params = {
          sort: '-createdAt',
          onDelete: 'no',
					includes: 'creator'
        };
        if (v) {
          params.title = v;
        }
        this.props.articleActions.fetch(params).then(() => {
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
    to: '/admin/articles'
  }]

  pagination = {
    total: this.props.articles.count,
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
				includes: 'creator'
			}

			this.props.articleActions.fetch(params);
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
				includes: 'creator'
			}

			this.props.articleActions.fetch(params);
    },
  }

  render() {
    this.pagination.total = this.props.articles.count;
    return (
      <ContentWrapper>
        <Breadcrumb items={this.breadCrumbs} />
        <ActionBar {...this.actionBarConfig} />
        <Table
          rowKey="id"
          pagination={this.pagination}
          dataSource={this.props.articles.list}
          columns={this.columns}
          size="middle"
          bordered />
      </ContentWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    articleActions: bindActionCreators(ArticleActions, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
