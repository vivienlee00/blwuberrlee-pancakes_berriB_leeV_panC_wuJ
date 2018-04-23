/*
BlwuBerrLee-Pancakes
SoftDev2 pd7
*/

var fatalities_decades = [{"count": 28, "story": {"Injured": 13, "Mental Health Issues": "Yes", "Title": "New Orleans Police Shootings", "Total victims": 22, "Gender": "Male", "Latitude": 30.0687242, "Longitude": -89.93147412, "Summary": "On New Year's Eve in 1972, a 23-year-old ex-Navy dental technician went to the central lockup New Orleans Police Department and shot four policeman that day.  Seven days later on January 7, 1973, the shooter shot a grocer and entered the Downtown Howard Johnson Hotel where he shot seventeen people before killed him at the top of the hotel roof.", "Date": "12/31/1972", "Race": "Black American or African American", "Fatalities": 10, "Location": "New Orleans, Louisiana", "S#": 317}},
{"count": 117, "story": {"Injured": 19, "Mental Health Issues": "Yes", "Title": "McDonald's restaurant in San Ysidro", "Total victims": 40, "Gender": "Male", "Latitude": 32.555556, "Longitude": -117.047656, "Summary": "On July 18, 1984, a 41-year-old unemployed man, walked into a McDonald's restaurant in San Ysidro, California, killing twenty-one people and injuring nineteen others. The shooter was killed at the scene by a SWAT team sniper perched on the roof next door.", "Date": "7/18/1984", "Race": "White American or European American", "Fatalities": 22, "Location": "San Ysidro, California", "S#": 304}},
{"count": 215, "story": {"Injured": 20, "Mental Health Issues": "Yes", "Title": "Luby's Cafeteria in Killeen, Texas", "Total victims": 43, "Gender": "Male", "Latitude": 31.07925506, "Longitude": -97.73392317, "Summary": "On October 16, 1991, a 35-year old unemployed seaman drove his truck through a window at Luby's Cafeteria in Killeen, Texas. He then opened fire, killing twenty-three people and wounding twenty before turning the gun on himself.", "Date": "10/16/1991", "Race": "White American or European American", "Fatalities": 24, "Location": "Killeen, Texas", "S#": 285}},
{"count": 261, "story": {"Injured": 23, "Mental Health Issues": "Yes", "Title": "Virginia Tech massacre", "Total victims": 55, "Gender": "Male", "Latitude": 37.2295733, "Longitude": -80.4139393, "Summary": "Virginia Tech student Seung-Hui Cho, 23, opened fire on his school's campus before committing suicide.", "Date": "4/16/2007", "Race": "Asian", "Fatalities": 32, "Location": "Blacksburg, Virginia", "S#": 218}},
{"count": 757, "story": {"Injured": 527, "Mental Health Issues": "Unclear", "Title": "Las Vegas Strip mass shooting", "Total victims": 585, "Gender": "M", "Latitude": 36.181271, "Longitude": -115.134132, "Summary": "The 2017 Las Vegas shooting occurred on the night of Sunday, October 1 when a gunman opened fire on a crowd of concertgoers at the Route 91 Harvest music festival on the Las Vegas Strip in Nevada, leaving 58 people dead and 851 injured.", "Date": "10/1/2017", "Race": "White", "Fatalities": 58, "Location": "Las Vegas, NV", "S#": 1}}];
var decades = [8, 22, 48, 44, 196];
var decadenum = 0;
var decadestf = true;
var seventies = [0, 1, 1, 0, 2, 0, 2, 0, 0, 2];
var seventiestf = false;
var eighties = [0, 0, 2, 2, 3, 2, 3, 1, 6, 3];
var eightiestf = false;
var nineties = [1, 5, 4, 9, 4, 4, 3, 6, 5, 7];
var ninetiestf = false;
var thousands = [1, 2, 2, 3, 2, 3, 7, 10, 6, 8];
var thousandstf = false;
var current = [2, 6, 15, 16, 14, 67, 69, 7, 0, 0];
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

var rectangle = svg.append("rect")
.attr("x", (width-15-(0.3 * (width-30)/5)))
.attr("y", 123)
.attr("width", (0.3 * (width-30)/5)+10)
.attr("height", barHeight+10)
.attr("id", "whitebox")
.attr("fill", "white")

//TOOLTIP FUNCTIONS
var tooltip=svg.append("svg");
tooltip.attr("class","tooltip");
//creates hovering box in timeline
var tooltip_rect = function(){
  tooltip.transition()
         .duration(200)
         .style("display","block");
  tooltip.append("rect")
         .style("stroke", 'grey')
         .style("border", 1)
         .attr("width", 1465)
         .attr("height", 475)
         .attr("x", 20)
         .attr("y", 200)
         .style("fill", "white");
}
//removes all hovering info in box function
var remove_hovering = function(){
  //removes display of box
  tooltip.style("display","none");
  //removes all items in box
  d3.selectAll(".shootings-text").remove();
  d3.selectAll("#piechartgender").remove();
  d3.selectAll("#piechartrace").remove();
  d3.selectAll(".no-data").remove();
  d3.selectAll(".fatal").remove();
  d3.selectAll(".largest_shooting").remove();
}
//adds mass shooting text in box
var mass_shootings_text = function(shootingsnum){
  svg.append("text")
     .text(shootingsnum + " mass shootings have occurred during this decade")
     .attr("x", 75)
     .attr("y", 250)
     .attr("class", "shootings-text");
}
//says no data in hovering box
var no_data_text = function(){
  svg.append("text")
     .text("There is no data for this year.")
     .attr("x", 75)
     .attr("y", 300)
     .attr("class", "no-data");
}
//adds fatalities text to box
var fatalities_text = function(year){
  svg.append("text")
     .text("There were a total of " + fatalities_decades[year]["count"] + " fatalities this year.")
     .attr("x", 800)
     .attr("y", 0)
     .attr("dy", "20em")
     .attr("class", "fatal");
  svg.append("text")
    .text("Largest Shooting of the Decade:")
    .attr("x", 800)
    .attr("y", 15)
    .attr("dy", "22em")
    .attr("class", "largest_shooting");
  svg.append("text")
    .text("Date: " + fatalities_decades[year]["story"]["Date"])
    .attr("x", 800)
    .attr("y", 30)
    .attr("dy", "24em")
    .attr("class", "largest_shooting");
  svg.append("text")
    .text("Location: " + fatalities_decades[year]["story"]["Location"])
    .attr("x", 800)
    .attr("y", 45)
    .attr("dy", "25em")
    .attr("class", "largest_shooting");

    var wrapText = function(){
      var text = fatalities_decades[year]["story"]["Summary"];
    }

  svg.append("foreignObject")
    //.text("Story: " + fatalities_decades[year]["story"]["Summary"])
    .attr("x", 792)
    //.attr("dy", "26em")
    .attr("y", 460)
    .attr('width', 150)
    .attr('height', 100)
    .append("xhtml:body")
    .html('<div style="width: 500px;">Story: '+ fatalities_decades[year]["story"]["Summary"] +'</div>')
    .attr("class", "largest_shooting");
}

bar.append("rect")
.attr("width", ((width-30)/5))
.attr("height", barHeight)
.style("fill-opacity", function(d) {return (d*2)/318.; })
.style("fill", "red")
.on("mouseover",function(d){
  tooltip_rect();
   if (decadestf){
    mass_shootings_text(d);
    fatalities_text(decades.indexOf(d));
  }
  console.log(d);
 updateG(decades.indexOf(d));
 updateR(decades.indexOf(d));
})
.on("mouseout",function(){
  remove_hovering();
});

var xScale = d3.scaleLinear()
.domain([1970, 2020])
.range([15, width-15]);
//.range([margin.left, width - margin.right]);

var xAxis = d3.axisBottom(xScale);
//rescale x-axis
var rescale_x = function(ary){
  xScale.domain(ary);
  bottomaxis.call(xAxis);
  document.getElementById("whitebox").style.display = "none";
  document.getElementById("empty").style.display = "none";
  document.getElementById("decades").style.display = "block";
}

var bottomaxis = svg.append("g");
bottomaxis.call(xAxis);
bottomaxis.attr("transform", "translate(0," + 100 + ")");


//creating year-by-year timelines for each decade
document.getElementById("0").addEventListener("click", function(){
  remove_hovering();
  if (seventiestf == false && decadestf){
    decadestf = false;
    seventiestf = true;
    rescale_x([1970, 1980]);
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
    bar.transition()
       .duration(1000)
       .attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + ",125)"; });
    barEnter.attr("height", barHeight)
    .style("width", ((width-30)/5))
    .style("fill", "red")
    .style("fill-opacity", function(d) {return (d*2)/12.; })
    .on("mouseover",function(d, i){
      tooltip_rect();
      if (seventiestf){
        mass_shootings_text(d);
      }if (d == 0){
        no_data_text();
      }else{
      year = 1970 + i;
      console.log(year);
      updateG_year(year);
      updateR_year(year);
    }
    })
    .on("mouseout",function(){
      remove_hovering();
    });
    barEnter.transition().duration(1000).style("width", ((width-30)/10));
  }
});


document.getElementById("1").addEventListener("click", function(){
  remove_hovering();
  if (eightiestf == false && decadestf){
    decadestf = false;
    eightiestf = true;
    rescale_x([1980, 1990]);
    bar.selectAll("rect").remove();
    bar.data(eighties)
      .enter().append("g")
      .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/5))+15)+ ",125)"; })
      .attr("id", function(d, i) { return i;})
      .attr("class", "time year");
    bar = chart.selectAll(".time");
  //bar.transition().duration(5000).attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + "," + ((height/2)-(barHeight/2)) +")"; })
  //adding rectangles to our timeline to represent each year in a given decade
    var barEnter = bar.append("rect");
    bar.transition()
       .duration(1000)
       .attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + ",125)"; });
    barEnter.attr("height", barHeight)
    .style("width", ((width-30)/5))
    .style("fill", "red")
    .style("fill-opacity", function(d) {return d/12.; })
    .on("mouseover",function(d, i){
      tooltip_rect();
      if (eightiestf){
        mass_shootings_text(d);
      }
      year = 1980 + i;
      updateG_year(year);
      updateR_year(year);
    })
    .on("mouseout",function(){
      remove_hovering();
    });
    barEnter.transition().duration(1000).style("width", ((width-30)/10));
  }
});

document.getElementById("2").addEventListener("click", function(){
remove_hovering();
if (ninetiestf == false && decadestf){
  decadestf = false;
  ninetiestf = true;
  rescale_x([1990, 2000]);
  bar.selectAll("rect").remove();
  bar.data(nineties)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/5))+15)+ ",125)"; })
    .attr("id", function(d, i) { return i;})
    .attr("class", "time year");
  bar = chart.selectAll(".time");
//bar.transition().duration(5000).attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + "," + ((height/2)-(barHeight/2)) +")"; })
//adding rectangles to our timeline to represent each year in a given decade
  var barEnter = bar.append("rect");
  bar.transition()
     .duration(1000)
     .attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + ",125)"; });
  barEnter.attr("height", barHeight)
  .style("width", ((width-30)/5))
  .style("fill", "red")
  .style("fill-opacity", function(d) {return d/18.; })
  .on("mouseover",function(d, i){
    tooltip_rect();
    if (ninetiestf){
      mass_shootings_text(d);
      console.log(d);
    }if (d == 0){
      no_data_text();
    }else{
      year = 1990 + i;
      updateG_year(year);
      updateR_year(year);
    }
  })
  .on("mouseout",function(){
    remove_hovering();
  });
  barEnter.transition().duration(1000).style("width", ((width-30)/10));
}
});

document.getElementById("3").addEventListener("click", function(){
remove_hovering();
if (thousandstf == false && decadestf){
  decadestf = false;
  thousandstf = true;
  rescale_x([2000, 2010]);
  bar.selectAll("rect").remove();
  bar.data(thousands)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/5))+15)+ ",125)"; })
    .attr("id", function(d, i) { return i;})
    .attr("class", "time year");
  bar = chart.selectAll(".time");
//bar.transition().duration(5000).attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + "," + ((height/2)-(barHeight/2)) +")"; })
//adding rectangles to our timeline to represent each year in a given decade
  var barEnter = bar.append("rect");
  bar.transition()
     .duration(1000)
     .attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + ",125)"; });
  barEnter.attr("height", barHeight)
  .style("width", ((width-30)/5))
  .style("fill", "red")
  .style("fill-opacity", function(d) {return d/20.; })
  .on("mouseover",function(d, i){
    tooltip_rect();
    if (thousandstf){
      mass_shootings_text(d);
    }
    year = 2000 + i;
    updateG_year(year);
    updateR_year(year);
  })
  .on("mouseout",function(){
    remove_hovering();
  });
  barEnter.transition().duration(1000).style("width", ((width-30)/10));
}
});

document.getElementById("4").addEventListener("click", function(){
remove_hovering();
if (currenttf == false && decadestf){
  decadestf = false;
  currenttf = true;
  rescale_x([2010, 2020]);
  bar.selectAll("rect").remove();
  bar.data(current)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + ((i * ((width-30)/5))+15)+ ",125)"; })
    .attr("id", function(d, i) { return i;})
    .attr("class", "time year");
  bar = chart.selectAll(".time");
//bar.transition().duration(5000).attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + "," + ((height/2)-(barHeight/2)) +")"; })
//adding rectangles to our timeline to represent each year in a given decade
  var barEnter = bar.append("rect");
  bar.transition()
     .duration(1000)
     .attr("transform", function(d, i) { return "translate(" + ((i*((width-30)/10)+15)) + ",125)"; });
  barEnter.attr("height", barHeight)
  .style("width", ((width-30)/5))
  .style("fill", "red")
  .style("fill-opacity", function(d) {return (d*2)/196.; })
  .on("mouseover",function(d, i){
    tooltip_rect();
    if (currenttf){
      mass_shootings_text(d);
    }
    year = 1980 + i;
    updateG_year(year);
    updateR_year(year);
  })
  .on("mouseout",function(){
    remove_hovering();
  });
  barEnter.transition().duration(1000).style("width", ((width-30)/10));
}
});

//gender data for 2010-2020
var gender = [[{'count': 6, 'gender': 'Male'}, {'count': 1, 'gender': 'Female'}, {'count': 0, 'gender': 'Unknown'}], [{'count': 20, 'gender': 'Male'}, {'count': 1, 'gender': 'Female'}, {'count': 0, 'gender': 'Unknown'}], [{'count': 47, 'gender': 'Male'}, {'count': 0, 'gender': 'Female'}, {'count': 0, 'gender': 'Unknown'}], [{'count': 42, 'gender': 'Male'}, {'count': 2, 'gender': 'Female'}, {'count': 0, 'gender': 'Unknown'}], [{'count': 173, 'gender': 'Male'}, {'count': 6, 'gender': 'Female'}, {'count': 21, 'gender': 'Unknown'}]];


/************************************
    basic stuff to set up pie chart
*************************************/
var radius = 150;
//g for graph? one is needed for each pie chart
var gg = svg.append("g").attr("transform", "translate(" + 1000 + "," + 550 + ")");
var gr = svg.append("g").attr("transform", "translate(" + 500 + "," + 550 + ")");
var ggy = svg.append("g").attr("transform", "translate(" + 1000 + "," + 550 + ")");
var gry = svg.append("g").attr("transform", "translate(" + 500 + "," + 550 + ")");

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
    .data(pie(gender[year]))//gender[year] returns data for the specific year
	.enter().append("g")
	.attr("class", "arc")
	.attr("id","piechartgender")
  .attr("transform", "translate(-400, -100)")
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
  .attr("transform", "translate(-300, -100)") //moves pie chart
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

var gender_year= {"1966": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1971": [{"count": 1, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1972": [{"count": 1, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1974": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1976": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1979": [{"count": 2, "gender": "Male"}, {"count": 1, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1982": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1983": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1984": [{"count": 3, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1985": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1986": [{"count": 3, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1987": [{"count": 1, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1988": [{"count": 6, "gender": "Male"}, {"count": 1, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1989": [{"count": 3, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1990": [{"count": 1, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1991": [{"count": 5, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1992": [{"count": 4, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1993": [{"count": 9, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1994": [{"count": 4, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1995": [{"count": 4, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1996": [{"count": 3, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1997": [{"count": 6, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1998": [{"count": 5, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "1999": [{"count": 7, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2000": [{"count": 1, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2001": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2002": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2003": [{"count": 3, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2004": [{"count": 2, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2005": [{"count": 3, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2006": [{"count": 7, "gender": "Male"}, {"count": 1, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2007": [{"count": 10, "gender": "Male"}, {"count": 1, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2008": [{"count": 6, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2009": [{"count": 8, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2010": [{"count": 2, "gender": "Male"}, {"count": 1, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2011": [{"count": 6, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2012": [{"count": 15, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2013": [{"count": 16, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2014": [{"count": 14, "gender": "Male"}, {"count": 2, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2015": [{"count": 67, "gender": "Male"}, {"count": 3, "gender": "Female"}, {"count": 0, "gender": "Unknown"}], "2016": [{"count": 48, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 21, "gender": "Unknown"}], "2017": [{"count": 7, "gender": "Male"}, {"count": 0, "gender": "Female"}, {"count": 0, "gender": "Unknown"}]};


//pie chart for gender per year
var updateG_year = function(year){
    //remove prev pie chart
    d3.selectAll("#piechartgenderyear").remove();
    //creating each slice
    var arc = gg.selectAll(".arc")
	.data(pie(gender_year[year]))//gender[year] returns data for the specific year
	.enter().append("g")
	.attr("class", "arc")
	.attr("id","piechartgender")
  .attr("transform", "translate(-400, -100)")
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

var race_year = {"1966": [{"count": 2, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1971": [{"count": 1, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1972": [{"count": 0, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1974": [{"count": 1, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 1, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1976": [{"count": 2, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1979": [{"count": 1, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1982": [{"count": 2, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1983": [{"count": 1, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1984": [{"count": 2, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1985": [{"count": 1, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1986": [{"count": 2, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1987": [{"count": 1, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1988": [{"count": 4, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 1, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1989": [{"count": 3, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1990": [{"count": 0, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1991": [{"count": 2, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 2, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1992": [{"count": 2, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 1, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1993": [{"count": 5, "race": "White"}, {"count": 2, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 1, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1994": [{"count": 4, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1995": [{"count": 3, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 1, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1996": [{"count": 2, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1997": [{"count": 3, "race": "White"}, {"count": 2, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 1, "race": "Other"}], "1998": [{"count": 4, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "1999": [{"count": 5, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 1, "race": "Other"}], "2000": [{"count": 1, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2001": [{"count": 1, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2002": [{"count": 0, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 1, "race": "Other"}], "2003": [{"count": 1, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 1, "race": "Other"}], "2004": [{"count": 1, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2005": [{"count": 1, "race": "White"}, {"count": 0, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 2, "race": "Other"}], "2006": [{"count": 4, "race": "White"}, {"count": 2, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 1, "race": "Other"}], "2007": [{"count": 6, "race": "White"}, {"count": 2, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 1, "race": "Other"}], "2008": [{"count": 3, "race": "White"}, {"count": 3, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2009": [{"count": 4, "race": "White"}, {"count": 2, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 2, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2010": [{"count": 1, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2011": [{"count": 3, "race": "White"}, {"count": 2, "race": "Black"}, {"count": 1, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 0, "race": "Other"}], "2012": [{"count": 8, "race": "White"}, {"count": 4, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 2, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 1, "race": "Other"}], "2013": [{"count": 8, "race": "White"}, {"count": 5, "race": "Black"}, {"count": 1, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 2, "race": "Other"}], "2014": [{"count": 5, "race": "White"}, {"count": 2, "race": "Black"}, {"count": 1, "race": "Latino"}, {"count": 0, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 6, "race": "Other"}], "2015": [{"count": 25, "race": "White"}, {"count": 26, "race": "Black"}, {"count": 1, "race": "Latino"}, {"count": 3, "race": "Asian"}, {"count": 8, "race": "Unknown"}, {"count": 4, "race": "Other"}], "2016": [{"count": 14, "race": "White"}, {"count": 18, "race": "Black"}, {"count": 0, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 29, "race": "Unknown"}, {"count": 7, "race": "Other"}], "2017": [{"count": 3, "race": "White"}, {"count": 1, "race": "Black"}, {"count": 1, "race": "Latino"}, {"count": 1, "race": "Asian"}, {"count": 0, "race": "Unknown"}, {"count": 1, "race": "Other"}]}

//pie chart for race per year
var updateR_year = function(year){
    //remove previous pie chart
    d3.selectAll("#piechartraceyear").remove();
    //create slices
    var arc = gr.selectAll(".arc")
	     .data(pie(race_year[year]))
	.enter().append("g")
	.attr("class", "arc")
	.attr("id","piechartrace")
  .attr("transform", "translate(-300, -100)") //moves pie chart
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

//updateG_year(2015)
//updateR_year(2015)
