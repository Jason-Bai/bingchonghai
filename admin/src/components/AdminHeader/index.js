import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import config from '../../config'

import libs from '../../util/libs'

import { removeSession } from '../../features/session/redux/actions'

import { push } from 'react-router-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

@connect(null, mapDispatchToProps)
export default class AdminHeader extends Component {

  constructor(props) {
    super(props)
    this.fix = this.fix.bind(this)
  }

  componentDidMount() {
    this.activate()
    this.pushMenu()
    this.pushNavbarMenu()
    this.tree()
  }

  activate() {
    let _this = this
    _this.fix()
    _this.fixSidebar()
    $(window, '.wrapper').resize(() =>{
      _this.fix()
      _this.fixSidebar()
    })
  }

  fix() {
    let neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight()
    let window_height = $(window).height()
    let sidebar_height = $('.sidebar').height()
    if ($('body').hasClass('fixed')) {
      $('.content-wrapper, .right-side').css('min-height', window_height - $('.main-footer').outerHeight())
    } else {
      if (window_height >= sidebar_height) {
        $('.content-wrapper, .right-side').css('min-height', window_height - neg)
      } else {
        $('.content-wrapper, .right-side').css('min-height', sidebar_height)
      }
    }
  }

  fixSidebar() {
    if (!$("body").hasClass("fixed")) {
      if (typeof $.fn.slimScroll != 'undefined') {
        $(".sidebar").slimScroll({destroy: true}).height("auto")
      }
      return;
    } else if (typeof $.fn.slimScroll == 'undefined' && console) {
      console.error("Error: the fixed layout requires the slimscroll plugin!")
    }
    //Enable slimscroll for fixed layout
    if (config.AdminLTE.sidebarSlimScroll) {
      if (typeof $.fn.slimScroll != 'undefined') {
        //Distroy if it exists
        $(".sidebar").slimScroll({destroy: true}).height("auto")
        //Add slimscroll
        $(".sidebar").slimscroll({
          height: ($(window).height() - $(".main-header").height()) + "px",
          color: "rgba(0,0,0,0.2)",
          size: "3px"
        })
      }
    }
  }

  pushMenu() {

    let screenSizes = config.AdminLTE.screenSizes

    $(config.AdminLTE.sidebarToggleSelector).click( (e) => {
      e.preventDefault()
      if ($(window).width() > (screenSizes.sm - 1)) {
        $("body").toggleClass('sidebar-collapse')
      }
      else {
        if ($("body").hasClass('sidebar-open')) {
          $("body").removeClass('sidebar-open')
          $("body").removeClass('sidebar-collapse')
        } else {
          $("body").addClass('sidebar-open')
        }
      }
    });

    $(".content-wrapper").click(() => {
      if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open')
      }
    });
  }

  tree() {

    let _this = this;

    $("li a", $(config.AdminLTE.treeSelector)).click((e) => {

      let $this = $(this);

      let checkElement = $this.next();

      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {

        checkElement.slideUp('normal', () => {
          checkElement.removeClass('menu-open')
        })

        checkElement.parent("li").removeClass("active")
      }
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {

        let parent = $this.parents('ul').first()

        let ul = parent.find('ul:visible').slideUp('normal')

        ul.removeClass('menu-open')

        let parent_li = $this.parent("li")

        checkElement.slideDown('normal', () => {

          checkElement.addClass('menu-open')

          parent.find('li.active').removeClass('active')

          parent_li.addClass('active')

          _this.fix()

        });
      }

      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  }

  pushNavbarMenu() {
    if (config.AdminLTE.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
      $(".navbar .menu").slimscroll({
        height: "200px",
        alwaysVisible: false,
        size: "3px"
      }).css("width", "100%");
    }
  }

  handleLogout = () => {
    this.props.dispatch(removeSession())
  }


  render() {

    const { name } = this.props.session


    return (
      <header className="main-header">
        <a className="logo">
          <span className="logo-mini"><b>MC </b></span>
          <span className="logo-lg"><b>Magic</b>Cube</span>
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
          <a href="javascript:void(0)" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown notifications-menu">
                <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">
                  <span>{name}</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-user"></i>
                          个人资料
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-gear"></i>
                          团队设置
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-retweet"></i>
                          切换团队
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-question-circle"></i>
                          帮助中心
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" onClick={this.handleLogout}>
                          <i className="fa fa-sign-out"></i>
                          退出
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
