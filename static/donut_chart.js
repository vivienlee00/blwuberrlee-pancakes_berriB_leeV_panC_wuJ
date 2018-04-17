//gender data for 2010-2020
var g = [{"gender": 'Male', "count": 152}
	 {"gender": 'Female', "count": 2},
	 {"gender": 'Unknown', "count": 42}];

var maxWidth = 200;
var maxHeight = 200;
var outerRadius = 100;
var ringWidth = 20;

var pie = d3.pie()
    .value(function(d) { return d.count;});
var arc = d3.svg.arc();

https://bl.ocks.org/mbhall88/b2504f8f3e384de4ff2b9dfa60f325e2
