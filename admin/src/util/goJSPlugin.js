import go from 'gojs'

import config from '../config'

const { levelColors } = config.gojs

let $ = go.GraphObject.make;

function mayWorkFor(node1, node2) {
  if (!(node1 instanceof go.Node)) return false;  // must be a Node
  if (node1 === node2) return false;  // cannot work for yourself
  if (node2.isInTreeOf(node1)) return false;  // cannot work for someone who works for you
  return true;
}

function textStyle() {
  return { font: "9pt  Segoe UI,sans-serif", stroke: "white" };
}

export default class GoJS {

  constructor(eleName) {
    this.eleName = eleName
    this.nodeIdCounter = 1
    this.myDiagram = this.createGoJSInstance(this.eleName)
    this._data = []
    this._dict = {}
    this.init()
  }

  createGoJSInstance(eleName) {
    let _this = this
    return $(go.Diagram, eleName, {
      initialContentAlignment: go.Spot.Left,
      maxSelectionCount: 1, // users can select only one part at a time
      validCycle: go.Diagram.CycleDestinationTree, // make sure users can only create trees
      "clickCreatingTool.archetypeNodeData": {}, // allow double-click in background to create a new node
      "clickCreatingTool.insertPart": function(loc) {  // customize the data for the new node
        this.archetypeNodeData = {
          key: _this.getNextKey(), // assign the key based on the number of nodes
          name: "(new name)",
          keywords: "",
          anyOut: "",
          lines: "0"
        };
        return go.ClickCreatingTool.prototype.insertPart.call(this, loc);
      },
      layout:
        $(go.TreeLayout,
          {
            treeStyle: go.TreeLayout.StyleLayered,
            layerStyle: go.TreeLayout.LayerIndividual,
            arrangement: go.TreeLayout.AlignmentCenterSubtrees,
            angle: 0,
            comparer: go.LayoutVertex.smartComparer,
            nodeSpacing: 20,
            nodeIndent: 10,
            nodeIndentPastParent: 0,
            layerSpacing: 50,
            sorting: go.TreeLayout.SortingForwards,
            compaction: go.TreeLayout.CompactionBlock,
            breadthLimit: 0,
            rowSpacing: 25,
            rowIndent: 10,
            setsPortSpot: true,
            setsChildPortSpot: true
          }),
      "undoManager.isEnabled": true // enable undo & redo
    });
  }

  init() {

    this.addDiagramListener()

    this.resetLayout()

    this.nodeTemplate()

    this.contextMenu()

    this.linkTemplate()

  }

  getNextKey() {
    var key = this.nodeIdCounter;
    while (this.myDiagram.model.findNodeDataForKey(key.toString()) !== null) {
      key = this.nodeIdCounter += 1;
    }
    return key.toString();
  }

  addDiagramListener() {

    let _this = this

    // when the document is modified, add a "*" to the title and enable the "Save" button
    _this.myDiagram.addDiagramListener("Modified", function(e) {
      var button = document.getElementById("SaveButton");
      if (button) button.disabled = !myDiagram.isModified;
      var idx = document.title.indexOf("*");
      if (_this.myDiagram.isModified) {
        if (idx < 0) document.title += "*";
      } else {
        if (idx >= 0) document.title = document.title.substr(0, idx);
      }
    });

    /*
    _this.myDiagram.addDiagramListener("TextEdited", function(e) {
      var part = e.subject.part
      _this.myDiagram.startTransaction("last node");
      if (part instanceof go.Node) {
        var it = part.findTreeChildrenNodes(); // find all child nodes
        console.log(it.next(), it.findObject('keywords'))
      }
      _this.myDiagram.commitTransaction("last node");
    })
    */

    // manage boss info manually when a node or link is deleted from the diagram
    _this.myDiagram.addDiagramListener("SelectionDeleting", function(e) {
      var part = e.subject.first(); // e.subject is the myDiagram.selection collection,
                                    // so we'll get the first since we know we only have one selection
      _this.myDiagram.startTransaction("clear parent");

      if (part instanceof go.Node) {
        var it = part.findTreeChildrenNodes(); // find all child nodes
        while(it.next()) { // now iterate through them and clear out the boss information
          var child = it.value;
          var parentText = child.findObject("parent"); // since the boss TextBlock is named, we can access it by name
          if (parentText === null) return;
          parentText.text = undefined;
        }
      } else if (part instanceof go.Link) {
        var child = part.toNode;
        var parentText = child.findObject("parent"); // since the boss TextBlock is named, we can access it by name
        if (parentText === null) return;
        parentText.text = undefined;
      }

      _this.myDiagram.commitTransaction("clear parent");

    });
  }

  resetLayout() {

    let _this = this

    this.myDiagram.layout.commitNodes = function() {
      go.TreeLayout.prototype.commitNodes.call(_this.myDiagram.layout);  // do the standard behavior
      // then go through all of the vertexes and set their corresponding node's Shape.fill
      // to a brush dependent on the TreeVertex.level value
      _this.myDiagram.layout.network.vertexes.each(function(v) {
        if (v.node) {
          var level = v.level % (levelColors.length);
          var colors = levelColors[level].split("/");
          var shape = v.node.findObject("SHAPE");
          if (shape) shape.fill = $(go.Brush, "Linear", { 0: colors[0], 1: colors[1], start: go.Spot.Left, end: go.Spot.Right });
        }
      });
    };

  }

  nodeTemplate() {
    let _this = this

    this.myDiagram.nodeTemplate =
        $(go.Node, "Auto",
          { doubleClick: function (e, obj) {
            let clicked = obj.part
            if (clicked !== null) {
              let thisemp = clicked.data
              _this.myDiagram.startTransaction("add splitor")
              let nextkey = _this.getNextKey()
              let newemp = { key: nextkey, name: "(new name)", keywords: "", anyOut: "", lines: "0", parent: thisemp.key }
              _this.myDiagram.model.addNodeData(newemp)
              _this.myDiagram.commitTransaction("add splitor")
            }
          } },
          { // handle dragging a Node onto a Node to (maybe) change the reporting relationship
            mouseDragEnter: function (e, node, prev) {
              var diagram = node.diagram;
              var selnode = diagram.selection.first();
              if (!mayWorkFor(selnode, node)) return;
              var shape = node.findObject("SHAPE");
              if (shape) {
                shape._prevFill = shape.fill;  // remember the original brush
                shape.fill = "darkred";
              }
            },
            mouseDragLeave: function (e, node, next) {
              var shape = node.findObject("SHAPE");
              if (shape && shape._prevFill) {
                shape.fill = shape._prevFill;  // restore the original brush
              }
            },
            mouseDrop: function (e, node) {
              var diagram = node.diagram;
              var selnode = diagram.selection.first();  // assume just one Node in selection
              if (mayWorkFor(selnode, node)) {
                // find any existing link into the selected node
                var link = selnode.findTreeParentLink();
                if (link !== null) {  // reconnect any existing link
                  link.fromNode = node;
                } else {  // else create a new link
                  diagram.toolManager.linkingTool.insertLink(node, node.port, selnode, selnode.port);
                }
              }
            }
          },
          // for sorting, have the Node.text be the data.name
          new go.Binding("text", "name"),
          // bind the Part.layerName to control the Node's layer depending on whether it isSelected
          new go.Binding("layerName", "isSelected", function(sel) { return sel ? "Foreground" : ""; }).ofObject(),
          // define the node's outer shape
          $(
            go.Shape,
            "Rectangle",
            {
              name: "SHAPE",
              fill: "white",
              stroke: null,
              portId: "",
              fromLinkable: true,
              toLinkable: true,
              cursor: "pointer"
            }
          ),
          $(
            go.Panel, "Horizontal",
              $(go.Panel, "Table",
                {
                  maxSize: new go.Size(200, 999),
                  margin: new go.Margin(6, 10, 0, 3),
                  defaultAlignment: go.Spot.Left
                },
                $(
                  go.RowColumnDefinition,
                  { column: 2, width: 200}
                ),
                $(
                  go.TextBlock,
                  textStyle(),
                  {
                    row: 0, column: 0, columnSpan: 5,
                    font: "12pt Segoe UI,sans-serif",
                    editable: true, isMultiline: false,
                    minSize: new go.Size(10, 16),
                    width: 150, height: 20, textValidation(tb, pre, post) {
                      if ('' === post) {
                        return false
                      }
                      return true
                    }
                  },
                  new go.Binding("text", "name").makeTwoWay()
                ),
                $(
                  go.TextBlock,
                  "关键词: ",
                  textStyle(),
                  {
                    row: 1,
                    column: 0
                  }
                ),
                $(
                  go.TextBlock,
                  textStyle(),
                  {
                    row: 1, column: 1, columnSpan: 5,
                    editable: true, isMultiline: true, minSize: new go.Size(10, 16),
                    width: 160, height: 20
                  },
                  new go.Binding("text", "keywords").makeTwoWay()
                ),
                $(
                  go.TextBlock,
                  "排除词: ",
                  textStyle(),
                  {
                    row: 2,
                    column: 0
                  }
                ),
                $(
                  go.TextBlock,
                  textStyle(),
                  {
                    row: 2, column: 1, columnSpan: 5,
                    editable: true, isMultiline: true, minSize: new go.Size(10, 16),
                    width: 160, height: 20
                  },
                  new go.Binding("text", "anyOut").makeTwoWay()
                ),
                $(
                  go.TextBlock,
                  textStyle(),
                  {
                    row: 3,
                    column: 0
                  },
                  new go.Binding("text", "key", function(v) {return "ID: " + v})
                ),
                $(
                  go.TextBlock,
                  textStyle(),
                  {
                    row: 3,
                    column: 1
                  },
                  new go.Binding("text", "parent", function(v) {return "Parent: " + v})
                ),
                $(
                  go.TextBlock,
                  textStyle(),
                  {
                    row: 3,
                    column: 2,
                    margin: new go.Margin(0, 0, 0, 10)
                  },
                  new go.Binding('text', 'lines', function (v) { return 'Lines: ' + v})
                )
              )
          )
        )
  }

  contextMenu() {
    let _this = this
    this.myDiagram.nodeTemplate.contextMenu = $(go.Adornment, "Vertical",
      $("ContextMenuButton",
        $(go.TextBlock, "清空分类点"),
        {
          click: function(e, obj) {
            var node = obj.part.adornedPart
            if (node !== null) {
              var thisemp = node.data
              _this.myDiagram.startTransaction("vacate")
              _this.myDiagram.model.setKeyForNodeData(thisemp, _this.getNextKey())
              _this.myDiagram.model.setDataProperty(thisemp, "name", "(new name)")
              _this.myDiagram.model.setDataProperty(thisemp, "keywords", "")
              _this.myDiagram.model.setDataProperty(thisemp, "anyOut", "")
              _this.myDiagram.model.setDataProperty(thisemp, "lines", "0")
              _this.myDiagram.commitTransaction("vacate");
            }
          }
        }
      ),
      $("ContextMenuButton",
        $(go.TextBlock, "移除分类点"),
        {
          click: function(e, obj) {
            // reparent the subtree to this node's boss, then remove the node
            var node = obj.part.adornedPart;
            if (node !== null) {
              _this.myDiagram.startTransaction("reparent remove");
              var chl = node.findTreeChildrenNodes();
              // iterate through the children and set their parent key to our selected node's parent key
              while(chl.next()) {
                var emp = chl.value;
                _this.myDiagram.model.setParentKeyForNodeData(emp.data, node.findTreeParentNode().data.key);
              }
              // and now remove the selected node itself
              _this.myDiagram.model.removeNodeData(node.data);
              _this.myDiagram.commitTransaction("reparent remove");
            }
          }
        }
      ),
      $("ContextMenuButton",
        $(go.TextBlock, "移除分类集"),
        {
          click: function(e, obj) {
            // remove the whole subtree, including the node itself
            var node = obj.part.adornedPart;
            if (node !== null) {
              _this.myDiagram.startTransaction("remove splitors");
              _this.myDiagram.removeParts(node.findTreeParts());
              _this.myDiagram.commitTransaction("remove splitors");
            }
          }
        }
      )
    );
  }

  linkTemplate() {
    this.myDiagram.linkTemplate =
        $(go.Link, go.Link.Orthogonal,
          { corner: 5, relinkableFrom: true, relinkableTo: true },
          $(go.Shape, { strokeWidth: 4, stroke: "#00a4a4" }));  // the link shape
  }

  readOnly(readonly = false) {
    this.myDiagram.isReadOnly = readonly
  }

  loadData(data) {
    this.myDiagram.model = go.Model.fromJson({"class": "go.TreeModel", "nodeDataArray": data})
  }

  getData() {
    let data = this.myDiagram.model.toJson()
    if (_.isString(data)) {
      data = JSON.parse(data)
    }
    return data
  }

  reload(data) {
    this.nodeIdCounter = 1
    this.loadData(data)
  }

  toTree() {
    const { nodeDataArray } = this.getData()
    this._data = this.replaceChineseCommaData(nodeDataArray)
    let root = this.getRootNode()
    let tree = this.getChildNode(root.key)
    this._dict = this.buildDict()
    this.buildChild(root.key, tree)
    return tree
  }

  buildDict() {
    var dict = {};
    let data = this._data
    for(var i = 0, len = data.length; i < len; i++) {
      var node = data[i];
      var parent = node.parent;
      if (!dict[parent]) {
        dict[parent] = [];
      }
      dict[parent].push(node.key);
    }
    return dict;
  }

  getRootNode() {
    return _.find(this._data, n => { return !n.parent })
  }

  getChildNodes() {
    return _.filter(this._data, n => { return n.parent })
  }

  getChildNode(index) {
    return this._data[index - 1]
  }

  buildChild(parent, node) {
    let _this = this
    if (!_this._dict[parent]) return
    let children = _this._dict[parent]

    if (children.length === 0) return

    node.children = []

    for(let i = 0, len = children.length; i < len; i++) {
      let child = children[i]
      let childNode = _this.getChildNode(child)
      _this.buildChild(child, childNode)
      node.children.push(childNode)
    }
  }

  isEmpty() {
    const { nodeDataArray }= this.data()
    return nodeDataArray.length === 0
  }

  isSame(name) {
    const { nodeDataArray }= this.data()
    if (nodeDataArray.length === 0) {
      return false
    }
    name = name.trim()
    return nodeDataArray[0].name === name
  }

  replaceChineseCommaData() {
    const { nodeDataArray } = this.data()

    let chineseComma = '，'

    let data = _.map(nodeDataArray, dt => {

      let properties = ['keywords', 'anyOut']

      _.each(properties, property => {

        let trimValue = dt[property].trim()

        if (trimValue != '') {
          dt[property] = _.uniq(trimValue.replace(chineseComma, ',').split(','))
        } else {
          dt[property] = null
        }

      })

      return dt
    })

    return data
  }

  getParentNodes() {
    if (!this._data.length) {
      return []
    }
    return _.filter(this._data, node => {
      return !node.parent
    })
  }

  data() {
    if (arguments.length) {
      if (_.isString(arguments[0])) {
        let data = {"class": "go.TreeModel", "nodeDataArray": [{
          "key": "1",
          "name": arguments[0],
          "keywords": "",
          "anyOut": ""
        }]}
        this.myDiagram.model = go.Model.fromJson(data)
      }
      if (_.isArray(arguments[0])) {
        this.myDiagram.model = go.Model.fromJson(arguments[0])
      }
    } else {
      let data = this.myDiagram.model.toJson()
      if (_.isString(data)) {
        data = JSON.parse(data)
      }
      return data
    }
  }

  // fetch tree nodes by parentId
  getTreeNodes() {
    let parentNodes = this.getParentNodes(),
        treeNodes = []
    _.each(parentNodes, parentNode => {
      let treeNode = [parentNode]
      this.__getTreeNodes(parentNode.key, treeNode)
      treeNodes.push(treeNode)
    })
    return treeNodes
  }

  __getTreeNodes(parentId = 1, nodes = []) {
    const nodeDataArray = this._data

    var childrenNodes = _.filter(nodeDataArray, node => {
      return node.parent === parentId
    })

    if (!childrenNodes.length) {
      return nodes
    }

    _.each(childrenNodes, node => {
      nodes.push(node)
    })

    let parentIds = _.map(childrenNodes, 'key')

    _.each(parentIds, parentId => {
      this.__getTreeNodes(parentId, nodes)
    })
  }

  setData() {
    const { nodeDataArray } = this.data()
    this._data = this.replaceChineseCommaData(nodeDataArray)
  }

  getData() {
    return this._data
  }

  getParentNodeByKey(key = '1', nodes = []) {
    return _.find(nodes, node => { return node.key === key})
  }

  buildTreeDict(nodes = []) {
    let dict = {};
    for(let i = 0, len = nodes.length; i < len; i++) {
      let { key, parent } = nodes[i];
      if (!dict[parent]) {
        dict[parent] = [];
      }
      dict[parent].push(key);
    }
    return dict;

  }

  buildTree(parent = '1', node, dict = {}, nodes = []) {
    if (!dict[parent]) return

    let _this = this,
        children = dict[parent]

    if (children.length === 0) return

    node.children = []

    for(let i = 0, len = children.length; i < len; i++) {
      let childKey = children[i],
          childNode = _.find(nodes, node => { return node.key === childKey })

      _this.buildTree(childKey, childNode, dict, nodes)

      node.children.push(childNode)
    }
  }

  toTrees() {
    this.setData()
    let treeNodes = this.getTreeNodes()
    return _.map(treeNodes, nodes => {
      let root = _.find(nodes, node => { return !node.parent }),
          childrenNodes = _.filter(nodes, node => { return node.parent }),
          dict = this.buildTreeDict(childrenNodes)
      this.buildTree(root.key, root, dict, nodes)
      return root
    })
  }
}
