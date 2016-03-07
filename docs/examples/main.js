'use strict';

var React = require('react');
var d3 = require('d3');
var hljs = require("highlight.js");
var rd3 = require('../../src');
var Tree = rd3.Tree;

hljs.initHighlightingOnLoad();

var Demos = React.createClass({

  getInitialState: function () {
    return {
      areaData: [],
      ohlcData: []
    }
  },

  componentWillMount: function () {
    // Browser data adapted from nvd3's stacked area data
    // http://nvd3.org/examples/stackedArea.html
    var parseDate = d3.time.format("%y-%b-%d").parse;
    d3.json("data/stackedAreaData.json", function (error, data) {
      this.setState({areaData: data});
    }.bind(this));

    d3.tsv("data/AAPL_ohlc.tsv", function (error, data) {
      var series = {name: "AAPL", values: []};

      data.map(function (d) {
        d.date = new Date(+d.date);
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
        series.values.push({x: d.date, open: d.open, high: d.high, low: d.low, close: d.close});
      });
      this.setState({ohlcData: [series]});
    }.bind(this));
  },

  render: function () {

    var treeData = {
      name: 'Nike',
      r: 15,
      children: [
        {
          name: 'Neo',
          r: 15,
        },
        {
          name: 'Make',
          r: 15,
        }
      ]
    };

    return (
      <div className="container">
        <a href="https://github.com/esbullington/react-d3"><img
          style={{position: "absolute", top: "0", right: "0", border: "0"}}
          src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
          alt="Fork me on GitHub"
          data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"/></a>
        <div className="row">
          <h3 className="page-header">react-d3: Multiple series charts</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Tree
              width={450}
              height={250}
              title="Tree"
              data={treeData}
              textColor="#fff"
              fontColor="12px"
              hoverAnimation={false}
            />
          </div>
          <div className="col-md-6">
            <pre ref='block'>
              <code className='js'>
                {
                  `//2014 World Most Populous Countries (millions)
//http://www.prb.org/pdf14/2014-world-population-data-sheet_eng.pdf
var treeData = {
      name: 'Nike',
      r: 15,
      children: [
        {
          name: 'Neo',
          r: 15,
        },
        {
          name: 'Make',
          r: 15,
        }
      ]
    };`
                }
              </code>
            </pre>
            <pre ref='block'>
              <code className='html'>
                {
                  `<Tree
  data={treeData}
  width={450}
  height={250}
  textColor="#484848"
  fontSize="12px"
  title="Tree"
  hoverAnimation={false}
/>`
                }
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }

});

React.render(
  <Demos />,
  document.body
);
