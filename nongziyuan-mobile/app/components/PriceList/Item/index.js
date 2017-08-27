import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class ListItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const data = this.props.data

    return (
      <div className="list-item clear-fix">
        <div className="price-header">
          <span className="price-type">[{data.location}]</span>
        </div>
        <div className="price-content">
          <h2 className="price-title">{data.title}</h2>
        </div>
        <div className="price-footer">
          <span className="price-date">{data.createdAt}</span>
        </div>
      </div>
    )
  }
}

export default ListItem
