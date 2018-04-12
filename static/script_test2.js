/*
BwuBerrLee-Pancakes
SoftDev2 pd7
*/
//
// var barHeight = 20;
//
// var decades = [25, 30, 15, 50, 80]; //dummy data representing # shootings in decade
//
// //axis of graph
// var x = d3.scale.linear()
//     .domain([1960, 2010])
//     .range([0, width]);
//
// //creates chart
// var chart = d3.select(".chart")
// var bar = chart.selectAll("div");
// var barUpdate = bar.data(decades);
// var barEnter = barUpdate.enter().append("div");
//
// barEnter.attr("width", 50)
//         .attr("height", barHeight);

var decades = [4, 8, 15, 16, 23, 42]; //# of shootings per decade

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
    .attr("transform", function(d, i) { return "translate(" + i * (width/5) + ",0)"; })
    .style("stroke-opacity", 0.5);

for(var i = 0; i < decades.length; i++){
  console.log("hi");
  bar.append("rect")
    .attr("width", width/5)
    .attr("height", barHeight)
    .style("background-color", "blue");

    //function(d) {return d/100.; });
};
