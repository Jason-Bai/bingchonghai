import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import config from '../../config'

import libs from '../../util/libs'

import { removeSession } from '../../features/session/redux/actions'
import { TeamActions } from '../../features/team/redux/actions'

import { push } from 'react-router-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    teamAction: bindActionCreators(TeamActions, dispatch),
    dispatch
  }
}

@connect(null, mapDispatchToProps)
export default class Header extends Component {

  constructor(props) {
    super(props)
    this.fix = this.fix.bind(this)
    this.handleMe = this.handleMe.bind(this)
  }

  componentDidMount() {
    this.activate()
    this.pushMenu()
    this.pushNavbarMenu()
    this.tree()
    if (libs.getCurrentTeamId()) {
      const currentTeamId = libs.getCurrentTeamId()
      this.setCurrentTeam(currentTeamId)
      return
    }
    const teams = _.values(this.props.session.joins)
    if (teams.length > 0) {
      const firstTeamId = teams[0].id
      this.setCurrentTeam(firstTeamId)
    }
  }

  setCurrentTeam(id = null) {
    if (!id) {
      return
    }
    libs.store.write('current_team', id)
    this.props.teamAction.setCurrentTeam(id)
    libs.store.write('current_team', id)
    const teams = _.values(this.props.session.joins)
    const currentTeam = libs.getCurrentTeam(teams)
    $('#current_team').html(currentTeam.name)
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

  handleTeamChange = (e) => {
    e.preventDefault()
    let teamId = +$(e.target).attr('data-id')
    const teams = _.values(this.props.session.joins)
    const currentTeam = _.find(teams, (t) => {
      return t.id === teamId
    })
    this.setCurrentTeam(currentTeam.id)
    this.props.dispatch(push('/'))
  }

  handleTeamSetting = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const teamId = +$(e.target).attr('data-id')
  }

  handleMe() {
    this.props.dispatch(push('/app/me'))
  }

  render() {

    const { name, joins } = this.props.session

    const teams = _.values(joins)

    const currentTeam = teams[0] || null

    const style = {
      padding: 0,
      margin: '0 45px 0 0',
      color: '#444444',
      fontSize: '15px',
      position: 'relative'
    }


    const teamMenus = teams.map(t => {
        const { role } = t
        const owner = role === 'owner'
        const style = owner ? {
            margin: '0',
            width: '92%',
            display: 'inline-block'
        } : {}
        return (
          <li key={t.id} data-id={t.id} onClick={this.handleTeamChange}>
            <a href="javascript:void(0)" data-id={t.id}>
                <h4 data-id={t.id} style={style}>{t.name}</h4>
                { owner && (
                  <div data-id={t.id} style={{display:'inline-block', width:'8%'}} onClick={this.handleTeamSetting}>
                    <i data-id={t.id} className="fa fa-gear"></i>
                  </div>
                )}
            </a>
          </li>
        )
    })

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
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                  <i className="fa fa-sitemap"></i>
                  &nbsp;&nbsp;
                  {currentTeam && (
                    <span id="current_team">{currentTeam.name}</span>
                  )}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <ul className="menu">
                      {teamMenus}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown notifications-menu">
                <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">
                  <span>{name}</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="javascript:void(0)" onClick={this.handleMe}>
                          <i className="fa fa-user"></i>
                          个人资料
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
