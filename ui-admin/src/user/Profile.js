import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentWrapper from '../app/ContentWrapper';

export class Profile extends Component {
  render() {
    const { session: { user } } = this.props;

    if (!user) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <ContentWrapper>
        <div className="profile">
          <div className="head-image">暂无头像</div>
          <div className="profile-detail">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-info">邮箱：{user.email}</p>
            <p className="user-info">角色：{user.role}</p>
            <p className="user-info">语言：{user.language}</p>
            <p className="user-info">状态：{user.status}</p>
            <p className="user-info">创建时间：{user.createdAt}</p>
          </div>
        </div>
      </ContentWrapper>
    )
  }
}

function mapStateToProps(state) {
  const { session } = state;
  return {
    session
  };
}

export default connect(mapStateToProps)(Profile)
