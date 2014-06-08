var margin = {top: 20, right: 40, bottom: 30, left: 20};
var width = 960 - margin.left - margin.right;
var height = 480 - margin.top - margin.bottom;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
  var flag = country.toLowerCase().replace(/ /g, '-');
  svg.append("image")
    .attr("x", x(country))
    .attr("y", height + 5)
    .attr("width", x.rangeBand())
    .attr("height", 18)
    .attr("xlink:href", "./assets/flags/"+ flag + ".svg")
    .attr("preserveAspectRatio", "none")
    .append("title")
      .text(country);
  return '';
});

var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10, "s");

var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = [
  {"country": "Algeria", "wins": 2, "losses": 5, "draws": 2, "class": "algeria"},
  {"country": "Argentina", "wins": 37, "losses": 20, "draws": 13,"class": "argentina"},
  {"country": "Australia", "wins": 2, "losses": 5, "draws": 3, "class": "australia"},
  {"country": "Belgium", "wins": 10, "losses": 17, "draws": 9, "class": "belgium"},
  {"country": "Bosnia", "wins": 0, "losses": 0, "draws": 0, "class": "bosnia"},
  {"country": "Brazil", "wins": 67, "losses": 15, "draws": 15, "class": "brazil"},
  {"country": "Cameroon", "wins": 4, "losses": 9, "draws": 7, "class": "cameroon"},
  {"country": "Chile", "wins": 9, "losses": 14, "draws": 6, "class": "chile"},
  {"country": "Columbia", "wins": 3, "losses": 8, "draws": 2, "class": "columbia"},
  {"country": "Costa Rica", "wins": 3, "losses": 6, "draws": 1, "class": "costa-rica"},
  {"country": "Croatia", "wins": 6, "losses": 5, "draws": 2, "class": "croatia"},
  {"country": "Ecuador", "wins": 3, "losses": 0, "draws": 4, "class": "ecuador"},
  {"country": "England", "wins": 26, "losses": 14, "draws": 19, "class": "england"},
  {"country": "France", "wins": 25, "losses": 18, "draws": 11, "class": "france"},
  {"country": "Germany", "wins": 60, "losses": 20, "draws": 19, "class": "germany"},
  {"country": "Ghana", "wins": 4, "losses": 3, "draws": 2, "class": "ghana"},
  {"country": "Greece", "wins": 1, "losses": 5, "draws": 0, "class": "greece"},
  {"country": "Honduras", "wins": 0, "losses": 3, "draws": 3, "class": "honduras"},
  {"country": "Iran", "wins": 1, "losses": 6, "draws": 2, "class": "iran"},
  {"country": "Italy", "wins": 44, "losses": 15, "draws": 21, "class": "italy"},
  {"country": "Ivory Coast", "wins": 2, "draws": 3, "losses": 1, "class": "ivory-coast"},
  {"country": "Japan", "wins": 4, "losses": 7, "draws": 3, "class": "japan"},
  {"country": "Korea", "wins": 5, "losses": 15, "draws": 8, "class": "korea"},
  {"country": "Mexico", "wins": 12, "losses": 24, "draws": 13, "class": "mexico"},
  {"country": "Netherlands", "wins": 22, "losses": 11, "draws": 10, "class": "netherlands"},
  {"country": "Nigeria", "wins": 4, "losses": 8, "draws": 2, "class": "nigeria"},
  {"country": "Portugal", "wins": 12, "losses": 8, "draws": 3, "class": "portgual"},
  {"country": "Russia", "wins": 2, "losses": 4, "draws": 0, "class": "russia"},
  {"country": "Spain", "wins": 28, "losses": 16, "draws": 12, "class": "spain"},
  {"country": "Switzerland", "wins": 9, "losses": 14, "draws": 6, "class": "switzerland"},
  {"country": "Uruguay", "wins": 18, "losses": 17, "draws": 12, "class": "uruguay"},
  {"country": "United States", "wins": 7, "losses": 17, "draws": 5, "class": "united-states"}
];

data.sort(function(a, b) {
  var totalA = a.wins + a.draws + a.losses;
  var totalB = b.wins + b.draws + b.losses;
  if (totalA === totalB) {
    if (a.wins > b.wins)
      return a.wins - b.wins;
    else if (a.draws > b.draws)
      return a.draws - b.draws;
    return b.losses - a.losses;
  }
  return totalA - totalB;
});

x.domain(data.map(function(d) { return d.country; }));
y.domain([0, d3.max(data, function(d) { return d.wins + d.losses + d.draws; })]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + width + ",0)")
    .call(yAxis);

svg.selectAll(".wins")
    .data(data)
  .enter().append("rect")
    .attr("class", function(d) { return "bar wins "+ d.class; })
    .attr("x", function(d) { return x(d.country); })
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.wins + d.losses + d.draws); })
    .attr("height", function(d) { return height - y(d.wins); });

svg.selectAll(".draws")
    .data(data)
  .enter().append("rect")
    .attr("class", function(d) { return "bar draws "+ d.class; })
    .attr("x", function(d) { return x(d.country); })
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.losses + d.draws); })
    .attr("height", function(d) { return height - y(d.draws); });

svg.selectAll(".losses")
    .data(data)
  .enter().append("rect")
    .attr("class", function(d) { return "bar losses "+ d.class; })
    .attr("x", function(d) { return x(d.country); })
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.losses); })
    .attr("height", function(d) { return height - y(d.losses); });

var legend = svg.selectAll(".legend")
    .data(["wins", "draws", "losses"])
  .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("rect")
    .attr("x", 0)
    .attr("width", 18)
    .attr("height", 18)
    .attr("class", function(d) { return d; });

legend.append("text")
    .attr("x", 20)
    .attr("y", 9)
    .attr("dy", ".35em")
    .text(function(d) { return d; });
