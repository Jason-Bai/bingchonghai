import React, { Component } from 'react'

export default class NotAuthorized extends Component {
  render() {
    return (
      <div className="content">
        <div className="error-page">
          <div className="error-content">
            <p>
              您当前不是admin，请联系运营进行开通！
            </p>
          </div>
        </div>
      </div>
    )
  }
}
