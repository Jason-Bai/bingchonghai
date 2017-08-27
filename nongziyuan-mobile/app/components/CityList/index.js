import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const { title, className, items } = this.props

    return (
      <div className="city-list-container">
        <div className="hd">{title}</div>
        <div className={`bd clear-fix ${className}`}>
          <ul>{items.map(({key, title}, index) => <li key={index} onClick={this.clickHandle.bind(this)}><a href="#">{title}</a></li>)}</ul>
        </div>
      </div>
    )
  }

  clickHandle(cityName) {
    const changeFn = this.props.changeFn
    changeFn(cityName)
  }
}

CityList.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  changeFn: PropTypes.func.isRequired,
}

export default CityList
