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

var setup=function(){

}

var xScale = d3.scaleLinear()
.domain([1960, 2020])
.range([margin.left, width - margin.right]);

var xAxis = d3.axisBottom(xScale);

var bottomaxis = svg.append("g")
bottomaxis.call(xAxis);
bottomaxis.attr("transform", "translate(0," + (height-margin.bottom) + ")");
