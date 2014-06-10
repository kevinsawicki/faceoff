var margin = {top: 20, right: 40, bottom: 30, left: 20};
var width = 960 - margin.left - margin.right;
var height = 480 - margin.top - margin.bottom;

var data = [
  {
    "country": "Algeria",
    "wins": 2,
    "losses": 5,
    "draws": 2,
    "best": 24,
    "odds": 1500,
    "bestYear": 1982,
    "population": 38480000,
    "gdp": 205800000000,
    "class": "algeria"
  },
  {
    "country": "Argentina",
    "wins": 37,
    "losses": 20,
    "draws": 13,
    "best": 1,
    "odds": 4,
    "champions": 2,
    "bestYear": 1986,
    "population": 41090000,
    "gdp": 475500000000,
    "class": "argentina"
  },
  {
    "country": "Australia",
    "wins": 2,
    "losses": 5,
    "draws": 3,
    "best": 16,
    "odds": 2500,
    "bestYear": 2006,
    "population": 22720000,
    "gdp": 1532000000000,
    "class": "australia"
  },
  {
    "country": "Belgium",
    "wins": 10,
    "losses": 17,
    "draws": 9,
    "best": 4,
    "odds": 20,
    "bestYear": 1986,
    "population": 11130000,
    "gdp": 483000000000,
    "class": "belgium"
  },
  {
    "country": "Bosnia",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 33,
    "odds": 150,
    "population": 3834000,
    "gdp": 17470000000,
    "class": "bosnia"
  },
  {
    "country": "Brazil",
    "wins": 67,
    "losses": 15,
    "draws": 15,
    "best": 1,
    "odds": 11/4,
    "champions": 5,
    "bestYear": 2002,
    "population": 198700000,
    "gdp": 2253000000000,
    "class": "brazil"
  },
  {
    "country": "Cameroon",
    "wins": 4,
    "losses": 9,
    "draws": 7,
    "best": 8,
    "odds": 750,
    "bestYear": 1990,
    "population": 21700000,
    "gdp": 25320000000,
    "class": "cameroon"
  },
  {
    "country": "Chile",
    "wins": 9,
    "losses": 14,
    "draws": 6,
    "best": 3,
    "odds": 50,
    "bestYear": 1962,
    "population": 17460000,
    "gdp": 269900000000,
    "class": "chile"
  },
  {
    "country": "Colombia",
    "wins": 3,
    "losses": 8,
    "draws": 2,
    "best": 16,
    "odds": 40,
    "bestYear": 1990,
    "population": 47700000,
    "gdp": 369600000000,
    "class": "colombia"
  },
  {
    "country": "Costa Rica",
    "wins": 3,
    "losses": 6,
    "draws": 1,
    "best": 16,
    "odds": 2500,
    "bestYear": 1990,
    "population": 4805000,
    "gdp": 45100000000,
    "class": "costa-rica"
  },
  {
    "country": "Croatia",
    "wins": 6,
    "losses": 5,
    "draws": 2,
    "best": 3,
    "odds": 175,
    "bestYear": 1998,
    "population": 4268000,
    "gdp": 59320000000,
    "class": "croatia"
  },
  {
    "country": "Ecuador",
    "wins": 3,
    "losses": 0,
    "draws": 4,
    "best": 16,
    "odds": 125,
    "bestYear": 2006,
    "population": 15490000,
    "gdp": 84040000000,
    "class": "ecuador"
  },
  {
    "country": "England",
    "wins": 26,
    "losses": 14,
    "draws": 19,
    "best": 1,
    "odds": 25,
    "champions": 1,
    "bestYear": 1966,
    "population": 63610000,
    "gdp": 2476000000000,
    "class": "england"
  },
  {
    "country": "France",
    "wins": 25,
    "losses": 18,
    "draws": 11,
    "best": 1,
    "odds": 22,
    "champions": 1,
    "bestYear": 1998,
    "population": 65700000,
    "gdp": 2611000000000,
    "class": "france"
  },
  {
    "country": "Germany",
    "wins": 60,
    "losses": 20,
    "draws": 19,
    "best": 1,
    "odds": 6,
    "champions": 3,
    "bestYear": 1990,
    "population": 80430000,
    "gdp": 3426000000000,
    "class": "germany"
  },
  {
    "country": "Ghana",
    "wins": 4,
    "losses": 3,
    "draws": 2,
    "best": 8,
    "odds": 200,
    "bestYear": 2010,
    "population": 25370000,
    "gdp": 40710000000,
    "class": "ghana"
  },
  {
    "country": "Greece",
    "wins": 1,
    "losses": 5,
    "draws": 0,
    "best": 24,
    "odds": 200,
    "bestYear": 2010,
    "population": 11090000,
    "gdp": 248900000000,
    "class": "greece"
  },
  {
    "country": "Honduras",
    "wins": 0,
    "losses": 3,
    "draws": 3,
    "best": 24,
    "odds": 1500,
    "bestYear": 1982,
    "population": 7936000,
    "gdp": 18430000000,
    "class": "honduras"
  },
  {
    "country": "Iran",
    "wins": 1,
    "losses": 6,
    "draws": 2,
    "best": 24,
    "odds": 2500,
    "bestYear": 1998,
    "population": 76420000,
    "gdp": 552400000000,
    "class": "iran"
  },
  {
    "country": "Italy",
    "wins": 44,
    "losses": 15,
    "draws": 21,
    "best": 1,
    "odds": 25,
    "champions": 4,
    "bestYear": 2006,
    "population": 59540000,
    "gdp": 2013000000000,
    "class": "italy"
  },
  {
    "country": "Ivory Coast",
    "wins": 2,
    "draws": 3,
    "losses": 1,
    "best": 24,
    "odds": 150,
    "bestYear": 2010,
    "population": 19840000,
    "gdp": 24680000,
    "class": "ivory-coast"
  },
  {
    "country": "Japan",
    "wins": 4,
    "losses": 7,
    "draws": 3,
    "best": 16,
    "odds": 150,
    "bestYear": 2010,
    "population": 127600000,
    "gdp": 5961000000000,
    "class": "japan"
  },
  {
    "country": "Mexico",
    "wins": 12,
    "losses": 24,
    "draws": 13,
    "best": 8,
    "odds": 200,
    "bestYear": 1986,
    "population": 120800000,
    "gdp": 1178000000000,
    "class": "mexico"
  },
  {
    "country": "Netherlands",
    "wins": 22,
    "losses": 11,
    "draws": 10,
    "best": 2,
    "odds": 28,
    "bestYear": 2010,
    "population": 16750000,
    "gdp": 770100000000,
    "class": "netherlands"
  },
  {
    "country": "Nigeria",
    "wins": 4,
    "losses": 8,
    "draws": 2,
    "best": 16,
    "odds": 300,
    "bestYear": 1998,
    "population": 168800000,
    "gdp": 459600000000,
    "class": "nigeria"
  },
  {
    "country": "Portugal",
    "wins": 12,
    "losses": 8,
    "draws": 3,
    "best": 3,
    "odds": 22,
    "bestYear": 1966,
    "population": 10510000,
    "gdp": 212100000000,
    "class": "portgual"
  },
  {
    "country": "Russia",
    "wins": 2,
    "losses": 4,
    "draws": 0,
    "best": 24,
    "odds": 80,
    "bestYear": 2002,
    "population": 143500000,
    "gdp": 2015000000000,
    "class": "russia"
  },
  {
    "country": "South Korea",
    "wins": 5,
    "losses": 15,
    "draws": 8,
    "best": 4,
    "odds": 250,
    "bestYear": 1998,
    "population": 50000000,
    "gdp": 1130000000000,
    "class": "south-korea"
  },
  {
    "country": "Spain",
    "wins": 28,
    "losses": 16,
    "draws": 12,
    "best": 1,
    "odds": 6,
    "champions": 1,
    "bestYear": 2010,
    "population": 46760000,
    "gdp": 1322000000000,
    "class": "spain"
  },
  {
    "country": "Switzerland",
    "wins": 9,
    "losses": 14,
    "draws": 6,
    "best": 8,
    "odds": 100,
    "bestYear": 1954,
    "population": 7997000,
    "gdp": 631200000000,
    "class": "switzerland"
  },
  {
    "country": "Uruguay",
    "wins": 18,
    "losses": 17,
    "draws": 12,
    "best": 1,
    "champions": 2,
    "odds": 28,
    "bestYear": 1950,
    "population": 3395000,
    "gdp": 49920000000,
    "class": "uruguay"
  },
  {
    "country": "United States",
    "wins": 7,
    "losses": 17,
    "draws": 5,
    "best": 3,
    "odds": 250,
    "bestYear": 1930,
    "population": 313900000,
    "gdp": 16240000000000,
    "class": "united-states"
  }
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

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(0, "s");

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

  svg.selectAll(".best")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-" + d.best; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(33 - d.best); })
      .attr("height", function(d) { return Math.max(0, height - y(33 - d.best)); });

  var years = finishes.filter(function(d) { return +d.bestYear > 0; });
  svg.selectAll(".years")
      .data(years)
    .enter().append("text")
      .attr("class", "years")
      .attr("x", function(d) { return x(d.country) + 12; })
      .attr("y", function(d) { return y(1) - 16; })
      .attr("dy", ".71em")
      .text(function(d) { return d.bestYear; });

  var legend = svg.selectAll(".legend")
      .data(["1st", "2nd", "3rd", "4th", "Quarterfinals", "Round of 16", "Group Stage"])
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

var graphGdp = function() {
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

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10, "$s");

  var svg = d3.select("svg.gdp")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var gdp = data.slice().sort(function(a, b) {
    return a.gdp - b.gdp;
  });

  x.domain(gdp.map(function(d) { return d.country; }));
  y.domain([1, d3.max(gdp, function(d) { return d.gdp; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

  svg.selectAll(".gdp")
      .data(gdp)
    .enter().append("rect")
      .attr("class", function(d) {
        if (d.gdp >= 10000000000000)
          return "bar gdp-ten-trillion";
        if (d.gdp >= 2000000000000)
          return "bar gdp-two-trillion";
        if (d.gdp >= 1000000000000)
          return "bar gdp-one-trillion";
        if (d.gdp >= 500000000000)
          return "bar gdp-half-trillion";
        if (d.gdp >= 250000000000)
          return "bar gdp-half-trillion";
        return "bars gdp-not-quarter-trillion";
      })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.gdp); })
      .attr("height", function(d) { return height - y(d.gdp); });

  var legend = svg.selectAll(".legend")
      .data(["10+ trillion", "2+ trillion", "1+ trillion", "500+ billion", "250+ billion", "< 250 billion"])
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
          return "gdp-ten-trillion";
        case 1:
          return "gdp-two-trillion";
        case 2:
          return "gdp-one-trillion";
        case 3:
          return "gdp-half-trillion";
        case 4:
          return "gdp-quarter-trillion";
        case 5:
          return "gdp-not-quarter-trillion";
        }
      });

  legend.append("text")
      .attr("x", 20)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function(d) { return d; });
}

var graphPopulation = function() {
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

  var svg = d3.select("svg.population")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var population = data.slice().sort(function(a, b) {
    return a.population - b.population;
  });

  x.domain(population.map(function(d) { return d.country; }));
  y.domain([1, d3.max(population, function(d) { return d.population; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

  svg.selectAll(".population")
      .data(population)
    .enter().append("rect")
      .attr("class", function(d) {
        if (d.population >= 200000000)
          return "bar population-200-million";
        if (d.population >= 100000000)
          return "bar population-100-million";
        if (d.population >= 50000000)
          return "bar population-50-million";
        if (d.population >= 25000000)
          return "bar population-25-million";
        if (d.population >= 10000000)
          return "bar population-10-million";
        return "bars population-not-10-million";
      })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.population); })
      .attr("height", function(d) { return height - y(d.population); });

  var legend = svg.selectAll(".legend")
      .data(["200+ million", "100+ million", "50+ million", "25+ million", "10+ million", "< 10 million"])
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
          return "population-200-million";
        case 1:
          return "population-100-million";
        case 2:
          return "population-50-million";
        case 3:
          return "population-25-million";
        case 4:
          return "population-10-million";
        case 5:
          return "population-not-10-million";
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
graphGdp();
graphPopulation();
