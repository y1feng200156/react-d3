'use strict';

var d3 = require('d3');
var React = require('react');
var Chart = require('../common/index').Chart;
var DataSeries = require('./../tree/DataSeries');

module.exports = React.createClass({

  displayName: 'Tree',

  propTypes: {
    data: React.PropTypes.array,
    margins: React.PropTypes.object,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    title: React.PropTypes.string,
    textColor: React.PropTypes.string,
    fontSize: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    colors: React.PropTypes.func,
    colorAccessor: React.PropTypes.func,
    hoverAnimation: React.PropTypes.bool,
    r: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      hoverAnimation: true,
      data: [],
      width: 400,
      heigth: 200,
      title: '',
      textColor: '#fff',
      fontSize: '0.85em',
      colors: d3.scale.category20c(),
      colorAccessor: (d, idx) => idx,
      r: 15
    };
  },

  render() {

    var props = this.props;
    const margin = {top: 20, right: 20, bottom: 20, left: 20};

    return (
      <Chart
        title={props.title}
        width={props.width}
        height={props.height}
      >
        <g className='rd3-tree'>
          <DataSeries
            data={props.data}
            width={props.width - margin.right - margin.left}
            height={props.height - margin.top - margin.bottom}
            colors={props.colors}
            colorAccessor={props.colorAccessor}
            textColor={props.textColor}
            fontSize={props.fontSize}
            r={props.r}
            hoverAnimation={props.hoverAnimation}
          />
        </g>
      </Chart>
    );
  }

});
