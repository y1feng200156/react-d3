'use strict';

var React = require('react');
var d3 = require('d3');
var NodeContainer = require('./NodeContainer');
var LinkContainer = require('./LinkContainer');


module.exports = React.createClass({

  displayName: 'DataSeries',

  propTypes: {
    data: React.PropTypes.array,
    r: React.PropTypes.number,
    colors: React.PropTypes.func,
    colorAccessor: React.PropTypes.func,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      data: [],
      colors: d3.scale.category20c(),
      colorAccessor: (d, idx) => idx
    };
  },

  render() {

    var props = this.props;

    var tree = d3.layout.tree()
      // make sure calculation loop through all objects inside array
      .size([props.width, props.height]);

    var tree_layout = tree.nodes(props.data);

    var nodes = tree_layout.map((node, idx) => {

      return (
        <NodeContainer
          key={idx}
          x={node.x}
          y={node.y}
          r={props.r}
          fill={props.colors(props.colorAccessor(node, idx))}
          label={node.name}
          fontSize={props.fontSize}
          textColor={props.textColor}
          hoverAnimation={props.hoverAnimation}
        />
      );
    }, this);

    var links = tree.links(tree_layout);
    var links_map = links.map((node, idx)=> {
      var d = d3.svg.diagonal().source(node.source).target(node.target).apply();
      return (
        <LinkContainer d={d}/>
      );
    }, this);

    return (
      <g>
        {links_map}
        <g transform={props.transform} className='tree'>
          {nodes}
        </g>
      </g>
    );
  }

});
