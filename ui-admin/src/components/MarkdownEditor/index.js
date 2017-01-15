import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

const hideStyle = {
    display: 'none'
};

const showStyle = {
    marginTop: '20px',
    display: 'block'
};

class MarkdownEditor extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
  }

  state = {
    previewStyle: this.props.isEdit ? showStyle : hideStyle,
    isEdit: this.props.isEdit,
    value: 'Hello Markdwon \n ========== \n >' + ' This is reactjs + babel + pure example \n\n ### Hello Markdown'
  }

  changeEdit() {
    if( this.state.isEdit ) {
      this.setState({
        isEdit:!this.state.isEdit,
        previewStyle:showStyle
      });
    } else {
      this.setState({
        isEdit:!this.state.isEdit,
        previewStyle:hideStyle
      });
    }
  }

  handleChange() {
    this.setState({value: ReactDOM.findDOMNode(this.refs.textarea).value});
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <button type="button" onClick={this.changeEdit}>Edit</button>
        <div className="pure-group">
          <textarea
            style={this.state.previewStyle}
            className="pure-input-1-2"
            name="mkinput"
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value}/>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: marked(this.state.value, {sanitize: true})
          }}
        />
      </div>
    );

  }
}

MarkdownEditor.proTypes = {
  isEdit: PropTypes.bool
}

export default MarkdownEditor;
