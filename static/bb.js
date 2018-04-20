/*
BlwuBerrLee-Pancakes
SoftDev2 pd7
*/
//=======================================
//             VARIABLE DECLARATIONS
//=======================================
var decades = [8, 22, 48, 44, 196];//number of shootings per decade
var decadenum = 0;
var decadestf = true;

var seventies = [10,20,30,40,50,60,70,80,90,100];
var seventiestf = false;//default is false until pressed on

var eighties = [1,2,3,4,5,6,7,8,9,10];
var eightiestf = false;

var nineties = [1,2,3,4,5,6,7,8,9,10];
var ninetiestf = false;

var thousands = [1,2,3,4,5,6,7,8,9,10];
var thousandstf = false;

var current = [1,2,3,4,5,6,7,8];
var currenttf = false;

//Svg related variable declarations
var svg=d3.select("svg");
var width= svg.attr("width");
var height= svg.attr("height");
var barHeight = 50; //height of timeline blocks


var margin = { top: 40, right: 40, bottom: 100, left: 40 };
//==========================================
//           D3 BEGINS
//==========================================

var chart = d3.select(".chart")
.attr("width", width)
.attr("height", height);// fixes the height and width of the svg

//Timeline creation
var bar = chart.selectAll("g")
.data(decades)
.enter().append("g")
.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/5))+15)+ ",125)"; })
.attr("id", function(d, i) { return i;})
.attr("class", "time year");

//Creating the tool tip
var tooltip=svg.append("rect")
.attr("class",tooltip);
// .style("font-size","1.25em")
// .attr("font-weight","bold");

bar.append("rect")
.attr("width", ((width-30)/5))
.attr("height", barHeight)
.style("fill-opacity", function(d) {return d/100.; })
.style("fill", "red")
.on("mouseover",function(d){//style and attributes for tooltip
  tooltip.transition()
         .duration(200);
         //.attr("fill", "black");
  tooltip.html("<b>hello</b>")
         .style("display","block")
         .text("yo")
         .style("stroke", 'grey')
         .attr("border", 1)
         .attr("width", 1465)
         .attr("height", 475)
         .attr("x", 20)
         .attr("y", 200)
         .style("fill", "white");
 var shootingsnum = 0;
 if (decadestf){
   	if (d3.select(this).attr("id") == 0){
   	    shootingsnum = 4;
   	// }else if (xPosAbs > 882){
   	//     shootingsnum = 3;
   	// }else if (xPosAbs > 588){
   	//     shootingsnum = 2;
   	// }else if (xPosAbs > 294){
   	//     shootingsnum = 1;
   	// }else if (xPosAbs > 000){
   	//     shootingsnum = 0;
   	}
  }
 tooltip.select("text").text(decades[shootingsnum] + " mass shootings have occurred during this decade");
 update(shootingsnum);//fill in text for the tooltip
})
.on("mouseout",function(){
	tooltip.style("display","none");
});
// .on("mousemove",function(){
//     var xPos=d3.mouse(this)[0];
//     var yPos=d3.mouse(this)[1];
//     var xPosAbs=d3.mouse(bar.node())[0];
//     tooltip.attr("transform","translate("+100+","+250+")");
//
//     var shootingsnum = 0;
//     if (decadestf){
// 	if (xPosAbs > 1176){
// 	    shootingsnum = 4;
// 	}
// 	else if (xPosAbs > 882)
// 	{
// 	    shootingsnum = 3;
// 	}
// 	else if (xPosAbs > 588)
// 	{
// 	    shootingsnum = 2;
// 	}
// 	else if (xPosAbs > 294)
// 	{
// 	    shootingsnum = 1;
// 	}
// 	else if (xPosAbs > 000)
// 	{
// 	    shootingsnum = 0;
// 	}
//     }
//     tooltip.select("text").text(decades[shootingsnum] + " mass shootings have occurred during this decade");
//     update(shootingsnum);
// });

//creating the x axis for the timeline

var xScale = d3.scaleLinear()
.domain([1970, 2020])//the domain is from 1970-2020 
.range([15, width-15]);
//.range([margin.left, width - margin.right]);

var xAxis = d3.axisBottom(xScale);


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
	    .style("fill-opacity", function(d) {
		return d/100.;
	    });

  barEnter.transition().duration(1000).style("width", ((width-30)/10));

  }
seventiestf = true;
});


document.getElementById("1").addEventListener("click", function()
					      { if (eightiestf == false && decadestf){

						  	decadestf = false;


  xScale.domain([1980,1990]);
  bottomaxis.call(xAxis);

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
});

document.getElementById("3").addEventListener("click", function()
{ if (thousandstf == false && decadestf){

	decadestf = false;
  xScale.domain([2000,2010]);
  bottomaxis.call(xAxis);
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
});

document.getElementById("4").addEventListener("click", function()
{ if (currenttf == false && decadestf){

	decadestf = false;


  xScale.domain([2010,2018]);
  bottomaxis.call(xAxis);

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

    var arc = tooltip.selectAll(".arc")
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
