import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import { policies } from '../../../config/policy'

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
        <div className="policy-header">
          <span className="policy-type">[{policies[data.type].title}]</span>
        </div>
        <div className="policy-content">
          <h2 className="policy-title">{data.title}</h2>
        </div>
        <div className="policy-footer">
          <span className="policy-date">{data.createdAt}</span>
        </div>
      </div>
    )
  }
}

export default ListItem
