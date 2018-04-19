/*
BlwuBerrLee-Pancakes
SoftDev2 pd7
*/

var decades = [8, 22, 48, 44, 196];
var decadenum = 0;
var decadestf = true;

var seventies = [10,20,30,40,50,60,70,80,90,100];
var seventiestf = false;

var eighties = [1,2,3,4,5,6,7,8,9,10];
var eightiestf = false;

var nineties = [1,2,3,4,5,6,7,8,9,10];
var ninetiestf = false;

var thousands = [1,2,3,4,5,6,7,8,9,10];
var thousandstf = false;

var current = [1,2,3,4,5,6,7,8];
var currenttf = false;

var svg=d3.select("svg");
var width= svg.attr("width");
var height= svg.attr("height");
var barHeight = 50; //height of timeline blocks


var margin = { top: 40, right: 40, bottom: 100, left: 40 };

var chart = d3.select(".chart")
.attr("width", width)
.attr("height", height);

var bar = chart.selectAll("g")
.data(decades)
.enter().append("g")
.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/5))+15)+ ",125)"; })
.attr("id", function(d, i) { return i;})
.attr("class", "time year");

bar.append("rect")
.attr("width", ((width-30)/5))
.attr("height", barHeight)
.style("fill-opacity", function(d) {return d/100.; })
.style("fill", "red")

.on("mouseover",function(){//TOOLTIP STARTS HERE!!
  tooltip.style("display","block");

})
.on("mouseout",function(){
	tooltip.style("display","block");
})
.on("mousemove",function(){
    var xPos=d3.mouse(this)[0];
    var yPos=d3.mouse(this)[1];
    var xPosAbs=d3.mouse(bar.node())[0];
    tooltip.attr("transform","translate("+xPos+","+yPos+")");
    var shootingsnum = 0;
    if (decadestf){
	if (xPosAbs > 1176){
	    shootingsnum = 4;
	}
	else if (xPosAbs > 882)
	{
	    shootingsnum = 3;
	}
	else if (xPosAbs > 588)
	{
	    shootingsnum = 2;
	}
	else if (xPosAbs > 294)
	{
	    shootingsnum = 1;
	}
	else if (xPosAbs > 000)
	{
	    shootingsnum = 0;
	}
    }
    tooltip.select("text").text(decades[shootingsnum] + " mass shootings have occurred during this decade");
    update(shootingsnum)
});

var tooltip=svg.append("g")
.attr("class",tooltip)
.style("stroke", 'black')
.attr("border", 1)
.attr("width", 200)
.attr("height", 200)
.attr("fill", "black");
tooltip.append("text")
.attr("x",15)
.attr("dy","1.2em")
.style("font-size","1.25em")
.attr("font-weight","bold");


var xScale = d3.scaleLinear()
.domain([1970, 2020])
.range([15, width-15]);
//.range([margin.left, width - margin.right]);

var xAxis = d3.axisBottom(xScale);

var rectangle = svg.append("rect")
.attr("x", (width-15-(0.3 * (width-30)/5)))
.attr("y", ((height-barHeight)/2)-10)
.attr("width", (0.3 * (width-30)/5)+10)
.attr("height", barHeight+10)
.attr("id", "whitebox")
.attr("fill", "white");

var bottomaxis = svg.append("g")
bottomaxis.call(xAxis);
bottomaxis.attr("transform", "translate(0," + 100 + ")");



document.getElementById("0").addEventListener("click", function()
{
    if (seventiestf == false && decadestf){

	decadestf = false;

//rescale x-axis
  xScale.domain([1970,1980]);
  bottomaxis.call(xAxis);
  document.getElementById("whitebox").style.display = "none";

  //bar.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/10))+15)+ ",125)"; })

  bar.selectAll("rect").remove();

  bar.data(seventies)
  .enter().append("g")
  .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/5))+15)+ ",125)"; })
  .attr("id", function(d, i) { return i;})
  .attr("class", "time year");

  bar = chart.selectAll(".time");
  //bar.transition().duration(5000).attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + "," + ((height/2)-(barHeight/2)) +")"; })

  //adding rectangles to our timeline to represent each year in a given decade
  var barEnter = bar.append("rect");

  bar.transition().duration(1000).attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + ",125)"; })


  //barEnter.transition().duration(1000).style("fill", "green");
  barEnter.attr("height", barHeight)
  .style("width", ((width-30)/5))
  .style("fill", "red")
  .style("fill-opacity", function(d) {return d/100.; });

  barEnter.transition().duration(1000).style("width", ((width-30)/10));

  }
seventiestf = true;
});


document.getElementById("1").addEventListener("click", function()
					      { if (eightiestf == false && decadestf){

						  	decadestf = false;


  xScale.domain([1980,1990]);
  bottomaxis.call(xAxis);
  document.getElementById("whitebox").style.display = "none";

  bar.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/10))+15)+ ",125)"; })

  console.log(bar.selectAll("rect").data());

  bar.selectAll("rect").remove();

  bar.data(eighties)
  .enter().append("g")
  .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/10))+15)+ ",125)"; })
  .attr("id", function(d, i) { return i;})
  .attr("class", "time year");

  bar = chart.selectAll(".time");

  bar.append("rect")
  .attr("width", ((width-30)/10))
  .attr("height", barHeight)
  .style("fill", "red")
  .style("fill-opacity", function(d) {return d/100.; })

  bar.selectAll("rect")
  .attr("width", ((width-30)/10))
  .attr("height", barHeight)
  .style("fill-opacity", function(d) {return d/100.; })

}
eightiestf = true;
}
);

document.getElementById("2").addEventListener("click", function()
{ if (ninetiestf == false && decadestf){

	decadestf = false;


  xScale.domain([1990,2000]);
  bottomaxis.call(xAxis);
  document.getElementById("whitebox").style.display = "none";

  bar.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/10))+15)+ ",125)"; })

  console.log(bar.selectAll("rect").data());

  bar.selectAll("rect").remove();

  bar.data(nineties)
  .enter().append("g")
  .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/10))+15)+ ",125)"; })
  .attr("id", function(d, i) { return i;})
  .attr("class", "time year");

  bar = chart.selectAll(".time");

  bar.append("rect")
  .attr("width", ((width-30)/10))
  .attr("height", barHeight)
  .style("fill", "red")
  .style("fill-opacity", function(d) {return d/100.; })

  bar.selectAll("rect")
  .attr("width", ((width-30)/10))
  .attr("height", barHeight)
  .style("fill-opacity", function(d) {return d/100.; })

}
ninetiestf = true;
}
);

document.getElementById("3").addEventListener("click", function()
{ if (thousandstf == false && decadestf){

	decadestf = false;


  xScale.domain([2000,2010]);
  bottomaxis.call(xAxis);
  document.getElementById("whitebox").style.display = "none";

  bar.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/10))+15)+ ",125)"; })

  console.log(bar.selectAll("rect").data());

  bar.selectAll("rect").remove();

  bar.data(thousands)
  .enter().append("g")
  .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/10))+15)+ ",125)"; })
  .attr("id", function(d, i) { return i;})
  .attr("class", "time year");

  bar = chart.selectAll(".time");

  bar.append("rect")
  .attr("width", ((width-30)/10))
  .attr("height", barHeight)
  .style("fill", "red")
  .style("fill-opacity", function(d) {return d/100.; })

  bar.selectAll("rect")
  .attr("width", ((width-30)/10))
  .attr("height", barHeight)
  .style("fill-opacity", function(d) {return d/100.; })

}
thousandstf = true;
}
);

document.getElementById("4").addEventListener("click", function()
{ if (currenttf == false && decadestf){

	decadestf = false;


  xScale.domain([2010,2018]);
  bottomaxis.call(xAxis);
  document.getElementById("whitebox").style.display = "none";

  bar.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/8))+15)+ ",125)"; })

  console.log(bar.selectAll("rect").data());

  bar.selectAll("rect").remove();

  bar.data(current)
  .enter().append("g")
  .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/8))+15)+ ",125)"; })
  .attr("id", function(d, i) { return i;})
  .attr("class", "time year");

  bar = chart.selectAll(".time");

  bar.append("rect")
  .attr("width", ((width-30)/8))
  .attr("height", barHeight)
  .style("fill", "red")
  .style("fill-opacity", function(d) {return d/100.; })

  bar.selectAll("rect")
  .attr("width", ((width-30)/8))
  .attr("height", barHeight)
  .style("fill-opacity", function(d) {return d/100.; })

}
currenttf = true;
}
);



//gender data for 2010-2020
var gender = [[{'count': 6, 'gender': 'Male'}, {'count': 1, 'gender': 'Female'}, {'count': 0, 'gender': 'Unknown'}], [{'count': 20, 'gender': 'Male'}, {'count': 1, 'gender': 'Female'}, {'count': 0, 'gender': 'Unknown'}], [{'count': 47, 'gender': 'Male'}, {'count': 0, 'gender': 'Female'}, {'count': 0, 'gender': 'Unknown'}], [{'count': 42, 'gender': 'Male'}, {'count': 2, 'gender': 'Female'}, {'count': 0, 'gender': 'Unknown'}], [{'count': 173, 'gender': 'Male'}, {'count': 6, 'gender': 'Female'}, {'count': 21, 'gender': 'Unknown'}]];
var radius = 150;
var g = svg.append("g").attr("transform", "translate(" + 750 + "," + 550 + ")");
var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.count; });

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);


var update = function(year){
    d3.selectAll("#piechart").remove();

    var arc = g.selectAll(".arc")
	.data(pie(gender[year]))
	.enter().append("g")
	.attr("class", "arc")
	.attr("id","piechart")

    arc.append("path")
	.attr("d", path)
	.attr("fill", function(d) {return color(d.data.gender); });

    arc.append("text")
	.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
	.attr("dy", "0.35em")
	.text(function(d) {
	    if (d.data.count > 0){
		return d.data.gender;
	    }
	    else{
		return "";
	    }
	});
}

//TOOLTIP:
/*
var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 0);
*/
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
