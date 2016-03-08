'use strict'

var React = require('react');
var d3 = require('d3');

module.exports = React.createClass({

  displayName: 'Node',

  propTypes: {
    fill: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    label: React.PropTypes.string,
    r: React.PropTypes.number
  },

  render() {

    var props = this.props;

    var textStyle = {
      'textAnchor': 'middle',
      'fill': props.textColor,
      'fontSize': props.fontSize
    };

    var t = `translate(${props.x}, ${props.y + props.r}  )`;

    return (
      <g transform={t}>
        <circle
          className='rd3-tree-node'
          r={props.r}
          fill={props.fill}
          onMouseOver={props.handleMouseOver}
          onMouseLeave={props.handleMouseLeave}
        />
        <text
          dy='.35em'
          style={textStyle}
          className='rd3-tree-node-text'
        >
          {props.label}
        </text>
      </g>
    );
  }
})