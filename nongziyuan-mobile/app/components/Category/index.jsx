import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

import './style.less'

class Category extends React.Component {
  /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="home-category">
        <div className="home-category-header clearfix">
          <h2 className="home-category-title">
            {this.props.title}
            <Link to={this.props.moreLink} className="more">更多分类</Link>
          </h2>
        </div>
        <div className="home-category-content">
          <ul>
            {this.props.data.length > 0 && this.props.data.map((item, index) => {
              return <Link to={item.to}>{item.name}</Link>
            })}
          </ul>
        </div>
        <div className="home-section-footer"></div>
      </div>
    )


    return (
      <div id="home-category">
        <ul>
          <Link to="/search/jingdian"><li className="float-left jingdian">景点</li></Link>
          <Link to="/search/ktv"><li className="float-left ktv">KTV</li></Link>
          <Link to="/search/gouwu"><li className="float-left gouwu">购物</li></Link>
          <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">生活服务</li></Link>
          <Link to="/search/jianshenyundong"><li className="float-left jianshenyundong">健身运动</li></Link>
          <Link to="/search/meifa"><li className="float-left meifa">美发</li></Link>
          <Link to="/search/qinzi"><li className="float-left qinzi">亲子</li></Link>
          <Link to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">小吃快餐</li></Link>
          <Link to="/search/zizhucan"><li className="float-left zizhucan">自助餐</li></Link>
          <Link to="/search/jiuba"><li className="float-left jiuba">酒吧</li></Link>
        </ul>
      </div>
    )
  }
}

export default Category
