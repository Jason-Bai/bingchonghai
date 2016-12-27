import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
  	current: 'user'
  }

  handleClick(e) {
    this.setState({
      current: e.key
    })
  }

  render() {
		return (
			<Menu onClick={this.handleClick}
        className="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4"
        selectedKeys={[this.state.current]}
        mode="inline">
				<Menu.Item key="user">
          <Link to="/users">
            <Icon type="user" />用户管理
          </Link>
        </Menu.Item>
        <Menu.Item key="category">
          <Link to="/categories">
            <Icon type="file-text" />分类管理
          </Link>
        </Menu.Item>
			</Menu>
		)
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {
  const {
    auth: {
      user
    }
  } = state

  return {
    user
  }
}

export default connect(mapStateToProps)(Sidebar)
