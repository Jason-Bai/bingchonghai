import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.css'

export default class Layout extends Component {

  render() {
    const { parts, children } = this.props
    let cols = []
    _.times(parts, e => {
      cols.push(
        <div key={`layout-${e}`} className={`ant-col-${24/parts} layout`}>
          <div className="layout-container">
            {children[e]}
          </div>
        </div>
      )
    })
    return <Row>{cols}</Row>
  }
}
