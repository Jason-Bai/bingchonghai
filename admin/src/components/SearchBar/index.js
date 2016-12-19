import React, { Component, PropTypes } from 'react'
import { Row, Col, Button, Form, Input } from 'antd'
const createForm = Form.create;
const FormItem = Form.Item;


@createForm()
export default class SearchBar extends Component {

  handleSubmit = () => {

    const { handleSearch, form } = this.props

    if (handleSearch(form.getFieldsValue(), form)) {

      form.resetFields()

    }
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    }

    
    return (
      <Form>
        <Row>
          <Col span={20}>
            {getFieldDecorator('q', {initialValue : this.props.q})(
              <Input placeholder={this.props.searchPlaceholder} type="text" />
            )}
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={this.handleSubmit} icon="search">{this.props.buttonText}</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}
