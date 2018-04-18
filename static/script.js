/*
  BlwuBerrLee-Pancakes
  SoftDev2 pd7
*/

var decades = [8, 22, 48, 44, 196];
var decadenum = 0;

var seventies = [1,2,3,4,5,6,7,8,9];
var seventiestf = false;

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
    .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/5))+15)+ "," + ((height/2)-(barHeight/2)) +")"; })
    .attr("id", function(d, i) { return i;})
    .attr("class", "decade");

bar.append("rect")
    .attr("width", ((width-30)/5))
    .attr("height", barHeight)
    .style("fill-opacity", function(d) {return d/100.; })
    .style("fill", "red")

  .on("mouseover",function(){//TOOLTIP STARTS HERE!!
    tooltip.style("display",null);

  })
  .on("mouseout",function(){
    tooltip.style("display","none");
  })
  .on("mousemove",function(){
    var xPos=d3.mouse(this)[0];
    var yPos=d3.mouse(this)[1];
    var xPosAbs=d3.mouse(bar.node())[0];
    console.log(xPosAbs);
    tooltip.attr("transform","translate("+xPos+","+yPos+")");
    var shootingsnum = 0;
    if (xPosAbs > 1176){
      shootingsnum = 196;
    }
    else if (xPosAbs > 882)
    {
      shootingsnum = 44;
    }
    else if (xPosAbs > 588)
    {
      shootingsnum = 48;
    }
    else if (xPosAbs > 294)
    {
      shootingsnum = 22;
    }
    else if (xPosAbs > 000)
    {
      shootingsnum = 8;
    }
    tooltip.select("text").text(shootingsnum + " mass shootings have occurred during this decade");
  });
var tooltip=svg.append("g")
    .attr("class",tooltip)
    .style("display","none");
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
bottomaxis.attr("transform", "translate(0," + 375 + ")");



document.getElementById("0").addEventListener("click", function()
					      { if (seventiestf == false){

						  bar.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/9))+15)+ "," + ((height/2)-(barHeight/2)) +")"; })

						  bar.selectAll("rect")
						      .attr("width", ((width-30)/9))
						      .attr("height", barHeight)
						      .style("fill-opacity", function(d) {return d/100.; })

						  xScale.domain([1970,1979]);
						  bottomaxis.call(xAxis);
						  document.getElementById("whitebox").style.display = "none";

						  bar.data(seventies)
						      .enter().append("g")
						      .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/9))+15)+ "," + ((height/2)-(barHeight/2)) +")"; })
						      .attr("id", function(d, i) { return i;})
						      .attr("class", "year");

						  var bar2 = chart.selectAll(".year");
						  bar2.data(seventies)

						  bar2.append("rect")
						      .attr("width", ((width-30)/9))
						      .attr("height", barHeight)
						      .style("fill", "red")
						      .style("fill-opacity", function(d) {return d/100.; })
					      }
						seventiestf = true;
					      }
					     );

document.getElementById("1").addEventListener("click", function()
					      { if (seventiestf == false){

						  bar.attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/9))+15)+ "," + ((height/2)-(barHeight/2)) +")"; })

						  bar.selectAll("rect")
						      .attr("width", ((width-30)/9))
						      .attr("height", barHeight)
						      .style("fill-opacity", function(d) {return d/100.; })

						  xScale.domain([1970,1979]);
						  bottomaxis.call(xAxis);
						  document.getElementById("whitebox").style.display = "none";

						  bar.data(seventies)
						      .enter().append("g")
						      .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/9))+15)+ "," + ((height/2)-(barHeight/2)) +")"; })
						      .attr("id", function(d, i) { return i;})
						      .attr("class", "year");

						  var bar2 = chart.selectAll(".year");
						  bar2.data(seventies)

						  bar2.append("rect")
						      .attr("width", ((width-30)/9))
						      .attr("height", barHeight)
						      .style("fill", "red")
						      .style("fill-opacity", function(d) {return d/100.; })
					      }
						seventiestf = true;
					      }
					     );



//gender data for 2010-2020
var g = [{"gender": 'Male', "count": 152},
	 {"gender": 'Female', "count": 2},
	 {"gender": 'Unknown', "count": 42}];

var pie = d3.layout.pie()
            .value(function(d) {return d.count; })
            .sort(null);
var width2 = 300;
var height2 = 300;
var outerRadius = width2/2;
var innerRadius = 100;
var color = d3.scale.category20();
var arc = d3.arc()
            .outerRadius(outerRadius)
            .innerRadius(innerRadius);

var donut = svg.selectAll('path')
              .data(pie(g))
              .enter().append('path')
              .attr("d", arc)
              .style("fill", function(d) {return color(d.data.gender); });
donut.append("path")
     .attr("d", arc)
     .style("fill", function(d) {return color(d.data.gender);});


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
