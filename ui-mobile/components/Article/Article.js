import React, { Component, PropTypes } from 'react';
import marked  from 'marked';
import Link from '../Link';
import s from './Article.css';

export default class Article extends Component  {

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  render() {
		const { title = '', date = '', source = '', content = '' } = this.props;
    const _content = marked(content, { tables: true, sanitize: true});
    return (
      <div className={`weui-panel ${s.article}`}>
        <div className={`weui-panel__hd ${s.article_hd}`}>
          <span className={`${s.article_title}`}>{title}</span>
        </div>
        <div className={`weui-panel__bd ${s.article_meta_list}`}>
          {date && (
          <span className={`${s.article_meta_item} {s.article_meta_date}`}>{date}</span>
          )}
          {source && (
          <Link to="/" className={`${s.article_meta_item} ${s.article_meta_link}`}>{source}</Link>
          )}
        </div>
        <div className={`weui-panel__bd ${s.article_bd}`}>
          <div className={`weui-media-box weui-media-box_text ${s.article_box}`}>
            <div  className={`weui-media-box__desc ${s.article_desc}`} dangerouslySetInnerHTML={{__html: _content}} />
          </div>
        </div>
      </div>
    );
  }
}
