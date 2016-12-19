import React, { Component } from 'react'
import { Breadcrumb } from '../components'

export default function addContentHeader(list) {
  return (WrappedComponent) => {
    class ContentHeaderDecorator extends Component {
      render() {
        return (
          <div>
            <section className="content-header">
              <h1>
                <small>{list[list.length-1].name}</small>
              </h1>
              <Breadcrumb items={list} />
            </section>
            <WrappedComponent {...this.props} />
          </div>
        )
      }
    }
    return ContentHeaderDecorator
  }
}
