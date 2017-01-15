import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  Table, Card, Row, Col,
	Form, Input, Icon, Select,
	message, Radio, Button
} from 'antd';
import marked from 'marked';

import { ActionBar, Breadcrumb, MarkdownEditor } from '../components'
import * as ArticleActions from './redux/actions';

import config from '../config';
import utils from '../utils';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class ArticlePreview extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { params: { articleId } } = this.props;
    this.props.articleActions.detail({ id: articleId });
  }

  state = {}

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, article) => {
      if (err) {
        return
      }
      /*
      return this.props.articleActions.create(article).then(() => {
        browserHistory.push('/admin/articles');
      });
      */
	  });
  }

	handleReset = ()  => {
		this.props.form.resetFields();
	}

  render() {
    const formItemLayout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
    };

    if (!this.props.articles.current) {
      return (
        <div>Loading...</div>
      );
    }

    const title = this.props.articles.current.title,
          content = marked(this.props.articles.current.content, {tables: true, sanitize: true});

    return (
      <div className="preview">
        <h1 className="title">{title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
	const { articles } = state;
  return {
    articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    articleActions: bindActionCreators(ArticleActions, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePreview);
