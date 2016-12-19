import React, { Component, PropTypes } from 'react'

import { Form, Icon, Input, Button } from 'antd'

const FormItem = Form.Item

class Login extends Component {

	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

  render() {

    const { getFieldDecorator } = this.props.form

    const { errorMessage } = this.props

		return (
			<Form inline onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Log in</Button>
        </FormItem>
      </Form>
		)
  }

	handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
			console.log(values)
    })
  }

}

Login.propTypes = {
  errorMessage: PropTypes.string
}

export default Form.create()(Login)
