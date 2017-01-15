import React, { Component } from 'react';
import { Upload, Icon, Modal } from 'antd';

class PicturesWall extends Component {

  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: []
  }

  handleCancel = () => this.setState({ previewVisible: false })

  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ file, fileList, event }) => {
    this.setState({ fileList });
    this.props.handleFileChanged && this.props.handleFileChanged(file, fileList, event);
  }

  handleRemove(file) {
    this.props.fileActions.remove({ id: file.id });
  }

  render() {
    const { previewVisible, previewImage } = this.state;
    const fileList = this.state.fileList;
    const data = { access_token: localStorage.getItem('x_access_token') };
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="/api_v1/files"
          data={data}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onRemove={this.handleRemove}
          onChange={this.handleChange}
        >
          {fileList.length >= 10 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }

}

export default PicturesWall;
