import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  Table, Card, Row, Col,
	Form, Input, Icon, Select,
	message, Radio, Button
} from 'antd';

import { ActionBar, Breadcrumb } from '../components'

import * as CategoryActions from './redux/actions';

import config from '../config';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class CategoryCreate extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

    const cateogryParams = {
      sort: '-createdAt',
      isDelete: 'no',
      startIndex: 0,
      maxResults: 500
    };

    this.props.categoryActions.fetch(cateogryParams);
  }


  breadCrumbs = [{
    name: 'Home',
    icon: 'home',
    to: '/'
  }, {
    name: '新建分类',
    icon: 'team',
    to: '/admin/categories/create'
  }]

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return
      }
      let category = {
        name: values.name,
        level: +values.level,
        parentId: values.parentId
      };
      return this.props.categoryActions.create(category).then(() => {
        browserHistory.push('/admin/categories');
      });
	  });
  }

	handleReset = ()  => {
		this.props.form.resetFields();
	}

  buildFatherOptions = () => {
    return _.map(this.props.categories.list, (category) => {
      const id = category.id.toString();
      return <Option key={id} value={id}>{category.name}</Option>
    })
  }

  render() {

    const { form: { getFieldDecorator }, errorMessage } = this.props, formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 15 },
    };

    return (
      <div>
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
                <Option value="0">Level 1</Option>
                <Option value="1">Level 2</Option>
                <Option value="2">Level 3</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Father: "
            hasFeedback
          >
            {getFieldDecorator('parentId')(
              <Select>
                {this.buildFatherOptions()}
              </Select>
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
      </div>
    )
  }
}

function mapStateToProps(state) {
	const { categories } = state;
  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(CategoryActions, dispatch),
    dispatch
  }
}

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(CategoryCreate));
