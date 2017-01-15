import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col, Menu, Icon, Button } from 'antd';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const logo = require('./logo.svg');

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

	state = {
  	current: 'home'
  }

	handleClick(e) {
    this.setState({
      current: e.key
    })
	}

  render() {
    const { loggedIn, session } = this.props;
    const { user } = session;
 		return (
      <header id="header">
        <Row>
          <Col className="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
						<a id="logo" href="/">
							<img alt="logo" src={logo} />
							<span>Bingchonghai</span>
						</a>
					</Col>
          <Col className="ant-col-xs-0 ant-col-sm-17 ant-col-md-16 ant-col-lg-18">
            { loggedIn && (
              <div id="nav">
                <Menu
									onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal">
										<MenuItem key="home">
                      <Link to="/admin">
										  	<Icon type="home" />首页
                      </Link>
										</MenuItem>
										<MenuItem key="article">
                      <Link to="/admin/articles">
										  	<Icon type="file-text" />文章管理
                      </Link>
										</MenuItem>
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
										<MenuItem key="tags">
                      <Link to="/admin/diseases">
										  	<Icon type="tags" />病害管理
                      </Link>
										</MenuItem>
										<SubMenu className="settings" title={<span><Icon type="user" />{user ? user.name : ''}</span>}>
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
          <Col className="ant-col-xs-2 ant-col-sm-2 ant-col-md-2 ant-col-lg-2">
            <Link to="/admin/articles/create" className="write-container">
              <Button className="write-btn" icon="plus">写文章</Button>
            </Link>
          </Col>
        </Row>
      </header>
		)
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Header);
