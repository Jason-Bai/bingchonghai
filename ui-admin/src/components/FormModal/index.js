import React, { Component } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

class FormModal extends Component {

  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  state = {
    visible: false
  }

  showModal() {
    this.setState({ visible: true });
  }

  handleCancel() {
    const { handleCancel } = this.props;
    this.setState({ visible: false });
    handleCancel && handleCancel();
  }

  handleCreate() {
    const { handleCreate, form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        handleCreate(err);
        return;
      }
      handleCreate(null, values).then(() => {
        form.resetFields();
        this.setState({ visible: false });
      }).catch((err) => {
        console.log(err)
      })
    });
  }

  render() {
    const { formLayout = 'vertical', buttonText = 'Add', modalTitle = 'Add', okText = 'Create' } = this.props;

    let formItems

    if (!this.props.formItems || typeof this.props.formItems !== 'function') {
      formItems = () => "no form items!"
    } else {
      formItems = this.props.formItems
    }

    return (
      <div className="form-modal">
        <Button type="primary" style={{width: '100%'}} onClick={this.showModal}>{buttonText}</Button>
        <Modal
          visible={this.state.visible}
          title={modalTitle}
          okText={okText}
          onCancel={this.handleCancel}
          onOk={this.handleCreate}
        >
          { formLayout === 'vertical' && (
            <Form vertical>
              {formItems(this.props.form)}
            </Form>
          )}

          { formLayout === 'inline' && (
            <Form inline>
              {formItems(this.props.form)}
            </Form>
          )}
        </Modal>
      </div>
    );
  }

}

export default Form.create()(FormModal);
