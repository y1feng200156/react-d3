'use strict';

var React = require('react');
var d3 = require('d3');

module.exports = React.createClass({
  displayName: 'Link',

  propTypes: {
    className: React.PropTypes.string,
    d: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      className: 'link'
    };
  },

  render(){
    var props = this.props;

    return (
      <g>
        <path className={props.className} d={props.d}/>
      </g>
    );
  }
});

