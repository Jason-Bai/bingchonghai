import React, { PropTypes } from 'react';
import cx from 'classnames';
import Link from '../Link';
import s from './styles.css';

const eNavbar = s['weui-enavbar'];
const eNavbarItem = s['weui-enavbar__item'];
const eNavbarItemOn = s['weui-bar__item_on'];

class Navbar extends React.Component {

  static propTypes = {
		items: PropTypes.array
  };

  state = {
    key: ''
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  handleClick(key) {
    this.setState({
      key
    });
    location.hash = key;
    this.props.onChange && this.props.onChange(key);
  }

  render() {
    return (
      <div className="bch-navbar">
        <div className={eNavbar}>
          {this.props.items.map((item, index) => {
            let className;

            if (this.state.key === '' && 0 === index) {
              className = `${eNavbarItem} ${eNavbarItemOn}`;
            } else {
              className = item.key === this.state.key ? `${eNavbarItem} ${eNavbarItemOn}` : eNavbarItem;
            }

            return (
              <div key={item.key} className={className} onClick={() => this.handleClick(item.key)}>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    )
  }

}

export default Navbar;
