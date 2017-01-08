import React, { Component } from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Icon } from 'antd';

export default class Breadcrumbs extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="breadcrumbs">
        <Breadcrumb>
          {items.map((item, index) => {
            return (
              <Breadcrumb.Item key={index}>
                <Link to={item.to}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Link>
              </Breadcrumb.Item>
            )
          })}
        </Breadcrumb>
      </div>
    )
  }
}
