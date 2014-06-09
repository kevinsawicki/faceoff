var margin = {top: 20, right: 40, bottom: 30, left: 20};
var width = 960 - margin.left - margin.right;
var height = 480 - margin.top - margin.bottom;

var data = [
  {"country": "Algeria", "wins": 2, "losses": 5, "draws": 2, "best": 13, "odds": 1500, "class": "algeria"},
  {"country": "Argentina", "wins": 37, "losses": 20, "draws": 13, "best": 1, "odds": 4, "champions": 2, "class": "argentina"},
  {"country": "Australia", "wins": 2, "losses": 5, "draws": 3, "best": 14, "odds": 2500, "class": "australia"},
  {"country": "Belgium", "wins": 10, "losses": 17, "draws": 9, "best": 4, "odds": 20, "class": "belgium"},
  {"country": "Bosnia", "wins": 0, "losses": 0, "draws": 0, "best": 32, "odds": 150, "class": "bosnia"},
  {"country": "Brazil", "wins": 67, "losses": 15, "draws": 15, "best": 1, "odds": 11/4, "champions": 5, "class": "brazil"},
  {"country": "Cameroon", "wins": 4, "losses": 9, "draws": 7, "best": 8, "odds": 750, "class": "cameroon"},
  {"country": "Chile", "wins": 9, "losses": 14, "draws": 6, "best": 3, "odds": 50, "class": "chile"},
  {"country": "Columbia", "wins": 3, "losses": 8, "draws": 2, "best": 14, "odds": 40, "class": "columbia"},
  {"country": "Costa Rica", "wins": 3, "losses": 6, "draws": 1, "best": 13, "odds": 2500, "class": "costa-rica"},
  {"country": "Croatia", "wins": 6, "losses": 5, "draws": 2, "best": 3, "odds": 175, "class": "croatia"},
  {"country": "Ecuador", "wins": 3, "losses": 0, "draws": 4, "best": 12, "odds": 125, "class": "ecuador"},
  {"country": "England", "wins": 26, "losses": 14, "draws": 19, "best": 1, "odds": 25, "champions": 1, "class": "england"},
  {"country": "France", "wins": 25, "losses": 18, "draws": 11, "best": 1, "odds": 22, "champions": 1, "class": "france"},
  {"country": "Germany", "wins": 60, "losses": 20, "draws": 19, "best": 1, "odds": 6, "champions": 3, "class": "germany"},
  {"country": "Ghana", "wins": 4, "losses": 3, "draws": 2, "best": 7, "odds": 200, "class": "ghana"},
  {"country": "Greece", "wins": 1, "losses": 5, "draws": 0, "best": 24, "odds": 200, "class": "greece"},
  {"country": "Honduras", "wins": 0, "losses": 3, "draws": 3, "best": 18, "odds": 1500, "class": "honduras"},
  {"country": "Iran", "wins": 1, "losses": 6, "draws": 2, "best": 14, "odds": 2500, "class": "iran"},
  {"country": "Italy", "wins": 44, "losses": 15, "draws": 21, "best": 1, "odds": 25, "champions": 4, "class": "italy"},
  {"country": "Ivory Coast", "wins": 2, "draws": 3, "losses": 1, "best": 17, "odds": 150, "class": "ivory-coast"},
  {"country": "Japan", "wins": 4, "losses": 7, "draws": 3, "best": 9, "odds": 150, "class": "japan"},
  {"country": "Korea", "wins": 5, "losses": 15, "draws": 8, "best": 4, "odds": 250, "class": "korea"},
  {"country": "Mexico", "wins": 12, "losses": 24, "draws": 13, "best": 6, "odds": 200, "class": "mexico"},
  {"country": "Netherlands", "wins": 22, "losses": 11, "draws": 10, "best": 2, "odds": 28, "class": "netherlands"},
  {"country": "Nigeria", "wins": 4, "losses": 8, "draws": 2, "best": 9, "odds": 300, "class": "nigeria"},
  {"country": "Portugal", "wins": 12, "losses": 8, "draws": 3, "best": 3, "odds": 22, "class": "portgual"},
  {"country": "Russia", "wins": 2, "losses": 4, "draws": 0, "best": 22, "odds": 80, "class": "russia"},
  {"country": "Spain", "wins": 28, "losses": 16, "draws": 12, "best": 1, "odds": 6, "champions": 1, "class": "spain"},
  {"country": "Switzerland", "wins": 9, "losses": 14, "draws": 6, "best": 6, "odds": 100, "class": "switzerland"},
  {"country": "Uruguay", "wins": 18, "losses": 17, "draws": 12, "best": 1, "champions": 2, "odds": 28, "class": "uruguay"},
  {"country": "United States", "wins": 7, "losses": 17, "draws": 5, "best": 3, "odds": 250, "class": "united-states"}
];

var graphRecords = function() {
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

  var svg = d3.select("svg.records")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var records = data.slice().sort(function(a, b) {
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

  x.domain(records.map(function(d) { return d.country; }));
  y.domain([0, d3.max(records, function(d) { return d.wins + d.losses + d.draws; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

  svg.selectAll(".wins")
      .data(records)
    .enter().append("rect")
      .attr("class", function(d) { return "bar wins "+ d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.wins + d.losses + d.draws); })
      .attr("height", function(d) { return height - y(d.wins); });

  svg.selectAll(".draws")
      .data(records)
    .enter().append("rect")
      .attr("class", function(d) { return "bar draws "+ d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.losses + d.draws); })
      .attr("height", function(d) { return height - y(d.draws); });

  svg.selectAll(".losses")
      .data(records)
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
}

var graphFinishes = function() {
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

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(32, "s").tickFormat(function(best) {
    return 33 - best;
  });

  var svg = d3.select("svg.finishes")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var finishes = data.slice().sort(function(a, b) {
    if (a.best === b.best)
      if (a.best === 1 && b.best === 1 && a.champions !== b.champions)
        return a.champions - b.champions;
      else
        return a.wins - b.wins;
    else
      return b.best - a.best;
  });

  x.domain(finishes.map(function(d) { return d.country; }));
  y.domain([1, d3.max(finishes, function(d) { return d.best; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

  svg.selectAll(".best")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-" + d.best; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(33 - d.best); })
      .attr("height", function(d) { return height - y(33 - d.best); });

  var legend = svg.selectAll(".legend")
      .data(["1st", "2nd", "3rd", "4th", "5th - 10th", "10th - 20th", "20th - 30th"])
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", 0)
      .attr("width", 18)
      .attr("height", 18)
      .attr("class", function(d, i) {
        switch (i) {
        case 0:
          return "best-1";
        case 1:
          return "best-2";
        case 2:
          return "best-3";
        case 3:
          return "best-4";
        case 4:
          return "best-10";
        case 5:
          return "best-20";
        case 6:
          return "best-30";
        }
      });

  legend.append("text")
      .attr("x", 20)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function(d) { return d; });
}

var graphOdds = function() {
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

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10);

  var svg = d3.select("svg.odds")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var odds = data.slice().sort(function(a, b) {
    return a.odds - b.odds;
  });

  x.domain(odds.map(function(d) { return d.country; }));
  y.domain([1, d3.max(odds, function(d) { return d.odds; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

  svg.selectAll(".odds")
      .data(odds)
    .enter().append("rect")
      .attr("class", function(d) {
        if (d.odds >= 2000)
          return "bar odds-2000";
        if (d.odds >= 1000)
          return "bar odds-1000";
        if (d.odds >= 100)
          return "bar odds-100";
        if (d.odds >= 25)
          return "bar odds-25";
        return "bars odds-1"
      })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.odds); })
      .attr("height", function(d) { return height - y(d.odds); });

  var legend = svg.selectAll(".legend")
      .data([">= 2000 to 1", ">= 1000 to 1", ">= 100 to 1", ">= 25 to 1", "< 25 to 1"])
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", 0)
      .attr("width", 18)
      .attr("height", 18)
      .attr("class", function(d, i) {
        switch (i) {
        case 0:
          return "odds-2000";
        case 1:
          return "odds-1000";
        case 2:
          return "odds-100";
        case 3:
          return "odds-25";
        case 4:
          return "odds-1";
        }
      });

  legend.append("text")
      .attr("x", 20)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function(d) { return d; });
}

graphRecords();
graphFinishes();
graphOdds();
