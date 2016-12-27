import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Row, Col, Menu, Icon } from 'antd'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Header extends Component {

	state = {
  	current: 'team',
  }

	handleClick(v) {
		console.log(v)
	}

  render() {
    const { loggedIn } = this.props
 		return (
      <header id="header">
        <Row>
          <Col className="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
						<a id="logo" href="/">
							<img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
							<span>Bingchonghai</span>
						</a>
					</Col>
          <Col className="ant-col-xs-0 ant-col-sm-17 ant-col-md-18 ant-col-lg-20">
            { loggedIn && (
              <div id="nav">
                <Menu
									onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal">
										<MenuItem key="team">
                      <Link to="/admin/users">
											  <Icon type="team" />用户管理
                      </Link>
										</MenuItem>
										<MenuItem key="bars">
                      <Link to="/admin/categories">
											  <Icon type="bars" />分类管理
                      </Link>
										</MenuItem>
										<SubMenu className="settings" title={<span><Icon type="setting" />设置</span>}>
										  <MenuItem key="user">
                        <Link to="/admin/profile">
										  	  <Icon type="user" />个人信息
                        </Link>
										  </MenuItem>
										  <MenuItem key="logout">
                        <Link to="/logout">
										  	  <Icon type="logout" />退出
                        </Link>
										  </MenuItem>
										</SubMenu>
								</Menu>
              </div>
            )}
          </Col>
        </Row>
      </header>
		)
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Header)
