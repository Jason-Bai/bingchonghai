import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  Table, Card, Row, Col,
	Form, Input, Icon, Select,
	message, Radio, Button
} from 'antd';
import marked from 'marked';
import ContentWrapper from '../app/ContentWrapper';

import { ActionBar, Breadcrumb, PicturesWall } from '../components'
import * as ArticleActions from './redux/actions';
import * as FileActions from '../file/redux/actions';

import config from '../config';
import utils from '../utils';

/*
let renderer = new marked.Renderer();

const image = marked.Renderer.prototype.image;

marked.Renderer.prototype.image = function(href, title, text) {
  const out = image.apply(this, [href, title, text]);
  return "<div class=\"image-item\">" + out  + "</div>";
};

renderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return '<h' + level + '><a name="' +
                escapedText +
                 '" class="anchor" href="#' +
                 escapedText +
                 '"><span class="header-link"></span></a>' +
                  text + '</h' + level + '>';
};
*/

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class ArticleCreate extends Component {

  constructor(props) {
    super(props);
    this.handleFileChanged = this.handleFileChanged.bind(this);
  }

  componentWillMount() {
    const fileParams = {
      isDelete: 'no',
      startIndex: 0,
      maxResults: 10
    };
    this.props.fileActions.fetch(fileParams);
  }

  state = {
    value: '## hello world'
  }

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, article) => {
      if (err) {
        return
      }
      return this.props.articleActions.create(article).then(() => {
        browserHistory.push('/admin/articles');
      });
	  });
  }

	handleReset = ()  => {
		this.props.form.resetFields();
	}

  handleFileChanged(file, fileList, event) {
    const content = this.props.form.getFieldValue('content');
    if (file.response) {
      const image = `![${file.response.name}](${file.response.url})`
      let _content
      if (!content) {
        _content = image;
      } else {
        if (content.indexOf(image) === -1) {
          _content = content + '\n' + image;
        } else {
          _content = content;
        }
      }
      this.props.form.setFieldsValue({
        content: _content
      });
    }
  }

  render() {

    const { form: { getFieldDecorator }, errorMessage } = this.props, formItemLayout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
    };

    return (
      <ContentWrapper>
				<Row>
				  <Col span={15} offset={4}>
				    { errorMessage && (
				    	<p className="text-red">{errorMessage}</p>
				    )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <PicturesWall {...this.props} handleFileChanged={this.handleFileChanged}/>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form horizontal onSubmit={this.handleSubmit}>
 				      <FormItem
                {...formItemLayout}
                label=""
                hasFeedback
              >
                {getFieldDecorator('title', {
                  rules: [{
                    required: true, min: 2, max: 30, message: 'Please input title!',
                  }],
                })(
                  <Input placeholder="无标题文章" className="article-title" />
                )}
              </FormItem>
 				      <FormItem
                {...formItemLayout}
                label=""
                hasFeedback
              >
                {getFieldDecorator('content')(
                  <Input type="textarea" className="article-content" rows={50} />
                )}
              </FormItem>
				      <Row>
				        <Col span={24}>
				        	<FormItem style={{textAlign: 'right'}}>
				        		<Button type="primary" htmlType="submit">添加</Button>
				        		<Button style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
				        	</FormItem>
				        </Col>
				      </Row>
            </Form>
          </Col>
          <Col span={12} className="preview">
            <h1 className="title">{this.props.form.getFieldValue('title')}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: marked(this.props.form.getFieldValue('content') || '', {sanitize: true})
              }}
             />
          </Col>
        </Row>
      </ContentWrapper>
    )
  }
}

function mapStateToProps(state) {
	const { files } = state;
  return {
    files
  }
}

function mapDispatchToProps(dispatch) {
  return {
    articleActions: bindActionCreators(ArticleActions, dispatch),
    fileActions: bindActionCreators(FileActions, dispatch),
    dispatch
  }
}

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(ArticleCreate));
