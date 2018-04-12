/*
BwuBerrLee-Pancakes
SoftDev2 pd7
*/
//======================================================================
//                          VAR DECLARATION
//======================================================================

var svg=d3.select("svg");
var width= svg.attr("width");
var height= svg.attr("height");
console.log(height);

var margin = { top: 40, right: 40, bottom: 100, left: 40 };

//var data = [10, 15, 20, 25, 30]; //change to fit dataset later on
var xData = ["A", "B", "C"];
var data = [{month:'Jan', A:20, B:5, C:10},
            {month:'Feb', A:30, B:10, C:20}];

var setup=function(){

}

var xScale = d3.scaleLinear()
.domain([1960, 2020])
.range([margin.left, width - margin.right]);

var xAxis = d3.axisBottom(xScale);

var bottomaxis = svg.append("g")
bottomaxis.call(xAxis);
bottomaxis.attr("transform", "translate(0," + (height-margin.bottom) + ")");

var color = d3.scale.category20(); //a color scale that d3 has built in!
var data = [
  [{y:21},{y:10},{y:10},{y:38},{y:20}],
  [{y:14},{y:25},{y:21},{y:10},{y:10}],
  [{y:14},{y:35},{y:21},{y:10},{y:4}]
];

var stack = d3.layout.stack();
stack(data); //stackifying the data

var max = d3.max(data, function(d) {
 return d3.max(d, function(v) {
    return v.y + v.y0
 })
})

var height = 416;
var yscale = d3.scale.linear()
   .domain([0, max])
   .range([0, height]);

var group = svg.append("g") //create a group so you can move everything around together
   .attr("transform", "translate(" + [100, 100] + ")")

var layers = group.selectAll("g")
 .data(data)
 .enter()
 .append("g")
 .style({
   fill: function(d,i) { return color(i) }
 })

var stacks = layers.selectAll("rect")
   .data(function(d) { return d }) //create one shape for each data point
	.enter()
   .append("rect")
   .attr({
   width: 30,
   height: function(d,i) {
     return yscale(d.y)
   },
   x: function(d,i) {
    return i * 40 //this is just a way to make the bars a certain distance apart
   },
   y: function(d,i) {
     return height - yscale(d.y0 + d.y) //subtract cause you flip it!
   }

   })
