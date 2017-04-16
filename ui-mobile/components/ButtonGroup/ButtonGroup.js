/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classNames';
import Link from '../Link';
import s from './ButtonGroup.css';

export default class ButtonGroup extends Component {

  constructor(props) {
    super(props);
    const { options } = this.props;
    if (options.length) {
      this.state = {
        defaultValue: options[0].id,
        options: options,
      }
    }
  }

  static propTypes = {
    defaultValue: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  state = {
    defaultValue: '',
    options: [],
  }

  onChange = (v) => {
    this.setState({
      defaultValue: v,
    });
    this.props.onChange && this.props.onChange(v);
  }

  render() {
    const buttons = this.state.options.map((option, index) => {

      const className = cx({
        'weui-btn': true,
        'weui-btn_mini': true,
        'weui-btn_primary': this.state.defaultValue === option.id,
        'weui-btn_default': !(this.state.defaultValue === option.id),
      });

      return (
        <a key={index} className={`${className} ${s.button_item}`} onClick={(e) => this.onChange(option.id)}>{option.label}</a>
      );
    });

    return (
      <div className={`${s.button_group}`}>
        {buttons}
      </div>
    );
  }
};
