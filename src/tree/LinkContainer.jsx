'use strict';

var React = require('react');
var Link = require('./Link');

module.exports = React.createClass({
  displayName: 'LinkContainer',
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
      <Link className={props.className} d={props.d}/>
    );
  }

});