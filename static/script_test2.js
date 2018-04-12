/*
BwuBerrLee-Pancakes
SoftDev2 pd7
*/

var decades = [25, 30, 15, 50, 80]; //dummy data representing # shootings in decade

var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");
var barHeight = 50; //height of timeline blocks

var x = d3.scale.linear()
    .domain([0, 2010]) //years
    .range([0, height]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

var bar = chart.selectAll("g")
    .data(decades)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + i * (width/5) + ",0)"; });

  console.log("hi");
  bar.append("rect")
    .attr("width", width/5)
    .attr("height", barHeight)
    .style("fill-opacity", function(d) {return d/100.; });
