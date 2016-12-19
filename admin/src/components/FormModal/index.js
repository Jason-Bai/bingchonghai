import React, { Component, PropTypes } from 'react'
import { Button, Form, Input, Modal } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

@createForm()
export default class FormModal extends Component {

  constructor(props, context) {
    super(props, context)
  }

  state = Object.assign({}, {
    visible: false
  }, this.props.state)

  showModal = () => {
    const { form, onOpen } = this.props
    form.resetFields()
    onOpen && onOpen()
    this.setState({ visible: true })
  }

  hideModal = () => {
    const { onCancel } = this.props
    onCancel && onCancel()
    this.setState({ visible: false })
  }

  handleSubmit = () => {

    const { handleSubmit, form } = this.props

    let _this = this

    form.validateFields((err, values) => {
      if (handleSubmit(err, values, form)) {
        _this.hideModal()
        form.resetFields()
      }
    })
  }

  render() {

    const { disabled } = this.props

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    }

    let item

    if (this.props.buttonTag === 'a') {
      item = (
        <a
          href="javascript:void(0)"
          onClick={this.showModal}
          disabled={disabled}>
          {this.props.buttonText}
        </a>
      )
    } else {
      item = (
        <Button
          type={this.props.buttonType || "primary"}
          onClick={this.showModal}
          disabled={disabled}>
          {this.props.buttonText}
        </Button>
      )
    }
    let bodies = this.props.renderForm(this.props.form),
        width = this.props.width || 520,
        buttonWrapStyle = this.props.buttonWrapStyle || { display: 'inline-block' },
        buttonWrapClass = this.props.buttonWrapClass || ''

    return (
      <div className={buttonWrapClass} style={buttonWrapStyle}>
        {item}
        <Modal
          title={this.props.modalTitle}
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.hideModal}
          width={width}>
          {bodies}
        </Modal>
      </div>
    )
  }
}
