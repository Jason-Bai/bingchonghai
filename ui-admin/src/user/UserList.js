import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Table, Row, Col, Icon,
  message, Modal, Radio
} from 'antd';

import { ActionBar, Breadcrumb } from '../components'

import * as UserActions from './redux/actions';

import config from '../config';

const confirm = Modal.confirm;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

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
    key: 'role',
    render: (text, record) => {
      const context = {userId: record.id, userActions: this.props.userActions}
      return (
        <RadioGroup defaultValue={record.role} size="small" onChange={this.handleRoleChanged.bind(context)}>
          <RadioButton value="member">Member</RadioButton>
          <RadioButton value="admin">Admin</RadioButton>
        </RadioGroup>
      )
    }
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
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => {
      const context = {userId: record.id, userActions: this.props.userActions}
      return (
        <RadioGroup defaultValue={record.status} size="small" onChange={this.handleStatusChanged.bind(context)}>
          <RadioButton value="enabled">Enabled</RadioButton>
          <RadioButton value="disabled">Disabled</RadioButton>
        </RadioGroup>
      )
    }
  }, {
    title: '操作',
    dataIndex: 'operations',
    key: 'operations',
    className: 'text-center',
    render: (text, record) => {
      const context = {userId: record.id, userActions: this.props.userActions}
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
        _this.userActions.remove({id: _this.userId})
      },
      onCancel() {},
    });
  }

  handleRoleChanged(e) {
    e.preventDefault();
    const role = e.target.value;
    this.userActions.modify({role}, {id: this.userId});
  }

  handleStatusChanged(e) {
    e.preventDefault();
    const status = e.target.value;
    this.userActions.modify({status}, {id: this.userId});
  }

  actionBarConfig = {
    add: {
      buttonText: '新建',
      to: '/admin/users/create'
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
        this.props.userActions.fetch(params).then(() => {
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
    name: '用户列表',
    icon: 'team',
    to: '/admin/users'
  }]

  pagination = {
    total: this.props.users.count,
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

			this.props.userActions.fetch(params);
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

			this.props.userActions.fetch(params);
    },
  }

  render() {
    return (
      <div>
        <Breadcrumb items={this.breadCrumbs} />
        <ActionBar {...this.actionBarConfig} />
        <Table
          rowKey="id"
          pagination={this.pagination}
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
