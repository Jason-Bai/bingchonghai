import React, { Component } from 'react'

import GoJS from '../../util/goJSPlugin'

export default class SplitorForm extends Component {

    constructor(props) {
      super(props)
      this.showModal = this.showModal.bind(this)
    }

    state = Object.assign({}, {
      goJSIns: null
    }, this.props.state)

    validators = [{
      target: 'name',
      rule: { required: true, min: 2, max: 30, message: '名称长度介于2到30个字符' }
    }, {
      target: 'tree',
      rule: {required: true, message: 'tree至少需要一个分类节点', leafMessage: '叶子节点至少需要一个关键词'}
    }]

    resetForm() {
      $('#name').val('')
      $('.form-group').removeClass('has-error').find('.help-block').html('')
      this.state.goJSIns.reload()
    }

    showModal() {

      if (!this.state.goJSIns) {
        this.state.goJSIns = new GoJS('tree')
      }

      this.resetForm()

      this.state.goJSIns.reload()

    }

    resetGoJSIns(value) {
      let initGoJSData = [{key: "1", name: value, keywords: '', anyOut: ''}]
      this.state.goJSIns.reload(initGoJSData)
    }

    hasErrors() {
      let $nameFormGroup = $('#name').parent('.form-group'),
          $treeFormGroup = $('#tree').parent('.form-group'),
          validators = this.validators

      this.checkNameValidation()

      if ($nameFormGroup.hasClass('has-error')) {
        return {
          validated: false,
          input: 'name',
          message: this.validators[0].rule.message
        }
      }

      this.checkTreeValidation()

      if ($treeFormGroup.hasClass('has-error')) {
        return {
          validated: false,
          input: 'tree',
          message: validators[1].rule.message
        }
      }

      return {
        validated: true
      }
    }

    handleFormSubmit = () => {

      const { handleSubmit } = this.props

      let hasErrors = this.hasErrors()

      if (!hasErrors.validated) {
        return handleSubmit(hasErrors)
      }

      let name = this.refs.name.value,
          trees = this.state.goJSIns.toTrees()

      let info = {
        name: name,
        tree: trees
      }

      if(handleSubmit(null, info)) {
        $('button[data-dismiss="modal"]').trigger('click')
        this.resetForm()
      }
    }

    checkNameValidation = (e) => {
      let $name  = $('#name'),
          $helpBlock = $name.next('.help-block'),
          $formGroup = $name.parent('.form-group'),
          validator = _.find(this.validators, v => { return v.target === 'name'})

      let value = $name.val().trim()

      if (validator.rule.required && value === '' ||
        validator.rule.min && validator.rule.min > value.length ||
        validator.rule.max && validator.rule.max < value.length) {
        $formGroup.addClass('has-error')
        $helpBlock.addClass('text-red').html("<i class='fa fa-times-circle-o'></i>" + validator.rule.message)
        return
      }

      $formGroup.removeClass('has-error')
      $helpBlock.attr('class', 'help-block').html('')

      if(this.state.goJSIns.isEmpty()) {
        this.resetGoJSIns(value)
        return
      }
    }

    checkTreeValidation = (e) => {

      let $tree = $('#tree'),
          $helpBlock = $tree.next('.help-block'),
          $formGroup = $tree.parent('.form-group'),
          validator = _.find(this.validators, v => { return v.target === 'tree'})

      const { nodeDataArray } = this.state.goJSIns.data()

      if (validator.rule.required && nodeDataArray.length === 0) {
        $formGroup.addClass('has-error')
        $helpBlock.addClass('text-red').html("<i class='fa fa-times-circle-o'></i>" + validator.rule.message)
        $tree.focus()
        return
      }

      let leafValidation = this.checkLeafNodeValidation()

      if (leafValidation) {
        $formGroup.addClass('has-error')
        $helpBlock.addClass('text-red').html("<i class='fa fa-times-circle-o'></i>" + validator.rule.leafMessage)
        $tree.focus()
        return
      }

      $formGroup.removeClass('has-error')
      $helpBlock.attr('class', 'help-block').html('')

    }

    checkLeafNodeValidation() {
      const { nodeDataArray } = this.state.goJSIns.data()

      if (nodeDataArray.length === 1) {
        let keywords = nodeDataArray[0].keywords.trim()
        return keywords === ''
      }

      const keys = _.chain(nodeDataArray).map('key').map(k => {return +k}).value()
      const parentIds = _.chain(nodeDataArray).filter(n => {return n.parent}).map('parent').map(p => {return +p}).value()

      const leafIds = _.difference(keys, parentIds)

      let validatedResults = _.map(leafIds, leafId => {
        let leaf = _.find(nodeDataArray, n => {
          return +n.key === leafId
        })
        let keywords = leaf.keywords.trim()
        return keywords === ''
      })

      return _.includes(validatedResults, true)

    }


    render() {

        let { modalWidth, buttonTag, buttonText, modalTitle } = this.props

        let item

        if (buttonTag === 'a') {
          item = (
            <a
              className="btn btn-primary pull-right"
              data-toggle="modal"
              data-target="#modal"
              onClick={this.showModal}>
              {buttonText}
            </a>
          )
        } else {
          item = (
            <button
              type="button"
              className="btn btn-primary pull-right"
              data-toggle="modal"
              data-target="#modal"
              onClick={this.showModal}>
              {buttonText}
            </button>
          )
        }

        modalWidth = modalWidth || '50%'

        return (
            <div>
              <div className="row">
                <div className="col-sm-2 col-md-2 col-sm-offset-10 col-md-offset-10">
                  {item}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div id="modal" className="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <form>
                      <div className="modal-dialog" style={{width: modalWidth}}>
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">创建高级分类</h4>
                          </div>
                          <div className="modal-body">
                            <div className="form-group">
                              <label htmlFor="name">姓名：</label>
                              <input type="text" id="name" name="name" ref="name" className="form-control" placeholder="请输入高级分类名称" onBlur={this.checkNameValidation}/>
                              <span className="help-block"></span>
                            </div>
                            <div className="form-group">
                              <label htmlFor="tree">高级分类：</label>
                              <div id="tree" name="tree" className="form-control" style={{ height: '400px' }} onBlur={this.checkTreeValidation}></div>
                              <span className="help-block"></span>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn pull-left" data-dismiss="modal">关闭</button>
                            <button type="button" className="btn" onClick={this.handleFormSubmit}>保存</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
