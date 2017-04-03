import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  Table, Card, Row, Col,
	Form, Input, Icon, Select,
	message, Radio, Button
} from 'antd';
import ContentWrapper from '../app/ContentWrapper';

import { ActionBar, Breadcrumb } from '../components'

import * as UserActions from './redux/actions';

import config from '../config';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class UserCreate extends Component {

  constructor(props) {
    super(props);
  }


  breadCrumbs = [{
    name: 'Home',
    icon: 'home',
    to: '/'
  }, {
    name: '新建用户',
    icon: 'team',
    to: '/admin/users/create'
  }]

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return
      }
      return this.props.userActions.create(values).then(() => {
        browserHistory.push('/admin/users');
      })
	  });
  }

	handleReset = ()  => {
		this.props.form.resetFields();
	}

  render() {

    const { form: { getFieldDecorator }, errorMessage } = this.props, formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 15 },
    };

    return (
      <ContentWrapper>
        <Breadcrumb items={this.breadCrumbs} />
				<Row>
				  <Col span={15} offset={4}>
				    { errorMessage && (
				    	<p className="text-red">{errorMessage}</p>
				    )}
          </Col>
        </Row>
        <Form horizontal onSubmit={this.handleSubmit}>
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
            label="E-mail: "
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )} </FormItem>
          <FormItem
            {...formItemLayout}
            label="Password: "
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, min: 8, max: 20, message: 'Please input your password!'
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
				  <Row>
				  	<Col span={12} offset={6}>
				  		<FormItem style={{textAlign: 'right'}}>
				  			<Button type="primary" htmlType="submit">添加</Button>
				  			<Button style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
				  		</FormItem>
				  	</Col>
				  </Row>
        </Form>
      </ContentWrapper>
    )
  }
}

function mapStateToProps(state) {
	const { users: { errorMessage } } = state;
  return {
		errorMessage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(UserActions, dispatch),
    dispatch
  }
}

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(UserCreate));
