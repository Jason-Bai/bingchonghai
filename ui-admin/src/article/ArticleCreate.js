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
import * as ArticleActions from './redux/actions';

import config from '../config';
import utils from '../utils';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class ArticleCreate extends Component {

  constructor(props) {
    super(props);
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleContentChanged = this.handleContentChanged.bind(this);
  }

  state = {
    title: '',
    content: ''
  }

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return
      }
      let disease = {
        name: values.name,
        categoryId: values.categoryId
      };
      return this.props.diseaseActions.create(disease).then(() => {
        browserHistory.push('/admin/diseases');
      });
	  });
  }

	handleReset = ()  => {
		this.props.form.resetFields();
	}

  handleTitleChanged(e) {
    const title = e.target.value;
    console.log(title);
    this.setState({
      title
    });
  }

  handleContentChanged(e) {
    const content = utils.md.render(e.target.value);
    console.log(content);
    this.setState({
      content
    });
  }

  render() {

    const { form: { getFieldDecorator }, errorMessage } = this.props, formItemLayout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
    };

    return (
      <div>
				<Row>
				  <Col span={15} offset={4}>
				    { errorMessage && (
				    	<p className="text-red">{errorMessage}</p>
				    )}
          </Col>
        </Row>
        <Form horizontal onSubmit={this.handleSubmit}>
				  <Row>
				    <Col span={24}>
				    	<FormItem style={{textAlign: 'right'}}>
				    		<Button type="primary" htmlType="submit">添加</Button>
				    		<Button style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
				    	</FormItem>
				    </Col>
				  </Row>
 				  <FormItem
            {...formItemLayout}
            label=""
            hasFeedback
          >
            {getFieldDecorator('title', {
              rules: [{
                required: true, min: 2, max: 30, message: 'Please input title!',
              }],
            })(
              <Input placeholder="无标题文章" onChange={this.handleTitleChanged}/>
            )}
          </FormItem>
 				  <FormItem
            {...formItemLayout}
            label=""
            hasFeedback
          >
            {getFieldDecorator('content')(
              <Input type="textarea" rows={100} onChange={this.handleContentChanged}/>
            )}
          </FormItem>
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
    categoryActions: bindActionCreators(ArticleActions, dispatch),
    dispatch
  }
}

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(ArticleCreate));
