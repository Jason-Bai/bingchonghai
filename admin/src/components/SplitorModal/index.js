import React, { Component } from 'react'

import GoJS from '../../util/goJSPlugin'

let index = 1

export default class SplitorModal extends Component {

  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this)
  }

  state = Object.assign({}, {
    goJSIns: null,
    data: []
  }, this.props.state)

  componentDidMount() {
    if (!this.state.goJSIns) {
      this.state.goJSIns = new GoJS('tree')
    }
    const { results } = this.props.record
    let nodes = [],
        trees = _.clone(results.tree),
        data = _.flatten(this.getTrees(trees))
    this.setState({
      data
    })
  }

  getTrees(trees) {
    return _.map(trees, (tree, index) => {
      let nodes = []
      tree.key = '1'
      this.getTree(tree, nodes)
      return nodes
    })
  }

  getTree(tree, nodes) {

    let node = _.omit(tree, 'children'),
        children = tree.children

    if(!node.keywords) {
        node.keywords = ''
    }

    if (!node.anyOut) {
        node.anyOut = ''
    }

    nodes.push(node)

    if(!children) return

    _.each(children, child => {
        index++
        child.key = index.toString()
        child.parent = node.key.toString()
        this.getTree(child, nodes)
    })

  }

  showModal() {
    this.state.goJSIns.reload(this.state.data)
  }

  render() {

    let { modalWidth, buttonTag, buttonText, modalTitle } = this.props

    let item

    if (buttonTag === 'a') {
      item = (
        <a
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
        {item}
        <div id="modal" className="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" style={{width: modalWidth}}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 className="modal-title">{modalTitle}</h4>
              </div>
              <div className="modal-body">
                <div id="tree" name="tree" className="form-control" style={{ height: '400px' }}></div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn pull-right" data-dismiss="modal">关闭</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
