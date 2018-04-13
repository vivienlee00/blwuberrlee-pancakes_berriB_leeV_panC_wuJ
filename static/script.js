/*
BlwuBerrLee-Pancakes
SoftDev2 pd7
*/
//======================================================================
//                          VAR DECLARATION
//======================================================================

var decades = [25, 30, 15, 50, 80]; //dummy data representing # shootings in decade


var svg=d3.select("svg");
var width= svg.attr("width");
var height= svg.attr("height");
var barHeight = 50; //height of timeline blocks


var margin = { top: 40, right: 40, bottom: 100, left: 40 };

var setup=function(){

}

var chart = d3.select(".chart")
.attr("width", width)
.attr("height", height);

var bar = chart.selectAll("g")
.data(decades)
.enter().append("g")
.attr("transform", function(d, i) { return "translate(" + i * (width/5) + "," + ((height/2)-(barHeight/2)) +")"; });

console.log("hi");
bar.append("rect")
.attr("width", width/5)
.attr("height", barHeight)
.style("fill-opacity", function(d) {return d/100.; });


var xScale = d3.scaleLinear()
.domain([1967, 2017])
.range([0, width]);
//.range([margin.left, width - margin.right]);

var xAxis = d3.axisBottom(xScale);

var bottomaxis = svg.append("g")
bottomaxis.call(xAxis);
bottomaxis.attr("transform", "translate(0," + 375 + ")");

/*
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
*/
