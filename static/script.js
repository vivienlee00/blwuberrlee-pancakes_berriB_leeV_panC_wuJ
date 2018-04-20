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

var tooltip=svg.append("svg");
tooltip.attr("class","tooltip");

bar.append("rect")
.attr("width", ((width-30)/5))
.attr("height", barHeight)
.style("fill-opacity", function(d) {return d/100.; })
.style("fill", "red")
.on("mouseover",function(d){//TOOLTIP STARTS HERE!!
  tooltip.transition()
         .duration(200)
         .style("display","block");
         //.attr("fill", "black");
  tooltip.append("rect")
         .style("stroke", 'grey')
         .style("border", 1)
         .attr("width", 1465)
         .attr("height", 475)
         .attr("x", 20)
         .attr("y", 200)
         .style("fill", "white");
 var shootingsnum = 0;
 if (decadestf){
   shootingsnum = d;
   svg.append("text")
      .text(shootingsnum + " mass shootings have occurred during this decade")
      .attr("x", 75)
      .attr("y", 250)
      .attr("class", "shootings-text");
   	}
 updateG(decades.indexOf(shootingsnum));
 updateR(decades.indexOf(shootingsnum));
})
.on("mouseout",function(){
  //removes display of box
	tooltip.style("display","none");
  //removes all items in box
  d3.selectAll(".shootings-text").remove();
  d3.selectAll("#piechartgender").remove();
  d3.selectAll("#piechartrace").remove();
});

var xScale = d3.scaleLinear()
.domain([1970, 2020])
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


/************************************
    basic stuff to set up pie chart
*************************************/
var radius = 150;
//g for graph? one is needed for each pie chart
var gg = svg.append("g").attr("transform", "translate(" + 1000 + "," + 550 + ")");
var gr = svg.append("g").attr("transform", "translate(" + 500 + "," + 550 + ")");

//color scale (given string, return color)
var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
//d3 build-in
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.count; });
//attributes for each slice
var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);
//labels for each slice
var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

//method for updating gender pie chart
var updateG = function(year){
    //remove prev pie chart
    d3.selectAll("#piechartgender").remove();

    //creating each slice
    var arc = gg.selectAll(".arc")
	.data(pie(gender[year])) //gender[year] returns data for the specific year
	.enter().append("g")
	.attr("class", "arc")
	.attr("id","piechartgender")
  .attr("transform", "translate(-100, -100)")
    arc.append("path")
	.attr("d", path)
	.attr("fill", function(d) {return color(d.data.gender); });
    //labelling
    arc.append("text")
	.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
	.attr("dy", "0.35em")
	.text(function(d) {//only label if there's data present
	    if (d.data.count > 0){
		return d.data.gender;
	    }
	    else{
		return "";
	    }
	});
}

var race ={"1990": [{"count": 30, "race": "White"}, {"count": 8, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 5, "race": "Asian"}, {"count": 3, "race": "Unknown"}, {"count": 2, "race": "Other"}], "1960": [{"count": 2, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2000": [{"count": 22, "race": "White"}, {"count": 11, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 5, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 6, "race": "Other"}], "1970": [{"count": 5, "race": "White"}, {"count": 2, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 1, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2010": [{"count": 67, "race": "White"}, {"count": 59, "race": "Black"}, {"count": 5, "race": "Latino"}, {"count": 7, "race": "Asian"}, {"count": 37, "race": "Unknown"}, {"count": 21, "race": "Other"}], "1980": [{"count": 16, "race": "White"}, {"count": 4, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 1, "race": "Unknown"}, {"count": 0, "race": "Other"}]}


//method for updating race pie chart
var updateR = function(year){
    //remove previous pie chart
    d3.selectAll("#piechartrace").remove();

    //create slices
    var arc = gr.selectAll(".arc")
	.data(pie(race[1970 + year * 10]))
	.enter().append("g")
	.attr("class", "arc")
	.attr("id","piechartrace")
  .attr("transform", "translate(-100, -100)") //moves pie chart
    arc.append("path")
	.attr("d", path)
	.attr("fill", function(d) {return color(d.data.race); });
    //label
    arc.append("text")
	.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
	.attr("dy", ".35em")
	.text(function(d) {
	    if (d.data.count > 0){//only label if there's data present
		return d.data.race;
	    }
	    else{
		return "";
	    }
	});
}
