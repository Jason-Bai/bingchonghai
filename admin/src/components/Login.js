import React, { Component, PropTypes } from 'react'

export default class Login extends Component {

  render() {
    const { errorMessage } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        {errorMessage && (
          <p>{errorMessage}</p>
        )}
        <input type='text' ref='username' className="form-control" placeholder='Username'/>
        <input type='password' ref='password' className="form-control" placeholder='Password'/>
        <button className="btn btn-primary">Login</button>
      </form>
    )
  }

  handleSubmit(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
  }
}

Login.propTypes = {
  errorMessage: PropTypes.string
}
