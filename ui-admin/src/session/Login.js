import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { AuthActions } from './redux/actions';

const FormItem = Form.Item;

export class Login extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  componentWillMount() {
    const now = moment(),
          expiredAt = localStorage.getItem('expiredAt'),
          expiredTime = moment(expiredAt);
    if (!this.props.auth.isAuthenticated || !expiredAt || expiredTime.diff(now) <= 0) {
      return browserHistory.push('/')
    }
    return browserHistory.push('/admin')
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    const { auth } = this.props;

		const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

		return (
      <Row>
        <Col span={12} offset={6}>
          <Card title="后台登录" className="admin-login">
						{ auth.errorMessage &&
							<p className="text-error">{auth.errorMessage}</p>
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
        return
      }
      this.props.authActions.loginUser(values)
    });
  }

}

Login.propTypes = {
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  const {
    auth
  } = state;

  return {
		auth
  };
}

function mapDispatchToProps(dispatch) {
	return {
    authActions: bindActionCreators(AuthActions, dispatch)
  };
}

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Form.create()(LoginPage);
