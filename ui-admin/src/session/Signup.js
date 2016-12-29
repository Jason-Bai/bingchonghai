import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd'

const FormItem = Form.Item

export class Signup extends Component {

	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

  render() {

    const { getFieldDecorator } = this.props.form

    const { errorMessage } = this.props

		const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

		return (
      <Row>
        <Col span={12} offset={6}>
          <Card title="后台注册" className="admin-signup">
						{ errorMessage &&
							<p className="text-error">{errorMessage}</p>
						}
			      <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }, {
                    required: true, message: 'Please input your E-mail!',
                  }],
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
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a>register now!</a>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
		)
  }

	handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error(err)
        return
      }
      console.log(values)
    })
  }

}

Signup.propTypes = {
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  const {
    auth: {
      errorMessage
    }
  } = state

  return {
    errorMessage
  }
}

function mapDispatchToProps(dispatch) {
	return {
    dispatch
  }
}

export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(Signup)

export default Form.create()(SignupPage)
