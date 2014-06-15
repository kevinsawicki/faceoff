var margin = {top: 20, right: 40, bottom: 30, left: 0};
var width = 950 - margin.left - margin.right;
var height = 480 - margin.top - margin.bottom;

var data = [
  {
    "country": "Algeria",
    "continent": "Africa",
    "wins": 2,
    "losses": 5,
    "draws": 2,
    "best": 24,
    "odds": 0.07,
    "fullOdds": "1500 to 1",
    "bestYear": 1982,
    "population": 38480000,
    "gdp": 205800000000,
    "income": 5020,
    "class": "algeria"
  },
  {
    "country": "Argentina",
    "continent": "South America",
    "wins": 37,
    "losses": 20,
    "draws": 13,
    "best": 1,
    "firsts": [1986, 1978],
    "seconds": [1990, 1930],
    "odds": 20,
    "fullOdds": "4 to 1",
    "champions": 2,
    "bestYear": [1986, 1978],
    "population": 41090000,
    "gdp": 475500000000,
    "income": 5170,
    "class": "argentina"
  },
  {
    "country": "Australia",
    "wins": 2,
    "losses": 5,
    "draws": 3,
    "best": 16,
    "odds": 0.04,
    "fullOdds": "2500 to 1",
    "bestYear": 2006,
    "population": 22720000,
    "gdp": 1532000000000,
    "income": 59260,
    "class": "australia"
  },
  {
    "country": "Belgium",
    "continent": "Europe",
    "wins": 10,
    "losses": 17,
    "draws": 9,
    "fourths": [1986],
    "best": 4,
    "odds": 4.76,
    "fullOdds": "20 to 1",
    "bestYear": 1986,
    "population": 11130000,
    "gdp": 483000000000,
    "income": 44820,
    "class": "belgium"
  },
  {
    "country": "Bosnia and Herzegovina",
    "continent": "Europe",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 33,
    "odds": 0.66,
    "fullOdds": "150 to 1",
    "population": 3834000,
    "gdp": 17470000000,
    "income": 4750,
    "class": "bosnia-and-herzegovina"
  },
  {
    "country": "Brazil",
    "continent": "South America",
    "wins": 67,
    "losses": 15,
    "draws": 15,
    "firsts": [2002, 1994, 1970, 1962, 1958],
    "seconds": [1998, 1950],
    "thirds": [1938, 1978],
    "fourths": [1974],
    "best": 1,
    "odds": 26.67,
    "fullOdds": "11 to 4",
    "champions": 5,
    "bestYear": [2002, 1994, 1970, 1962, 1958],
    "population": 198700000,
    "gdp": 2253000000000,
    "income": 11630,
    "class": "brazil"
  },
  {
    "country": "Cameroon",
    "continent": "Africa",
    "wins": 4,
    "losses": 9,
    "draws": 7,
    "best": 8,
    "odds": 0.13,
    "fullOdds": "750 to 1",
    "bestYear": 1990,
    "population": 21700000,
    "gdp": 25320000000,
    "income": 1170,
    "class": "cameroon"
  },
  {
    "country": "Chile",
    "continent": "South America",
    "wins": 9,
    "losses": 14,
    "draws": 6,
    "thirds": [1962],
    "best": 3,
    "odds": 1.96,
    "fullOdds": "50 to 1",
    "bestYear": 1962,
    "population": 17460000,
    "gdp": 269900000000,
    "income": 14310,
    "class": "chile"
  },
  {
    "country": "Colombia",
    "continent": "South America",
    "wins": 3,
    "losses": 8,
    "draws": 2,
    "best": 16,
    "odds": 2.44,
    "fullOdds": "40 to 1",
    "bestYear": 1990,
    "population": 47700000,
    "gdp": 369600000000,
    "income": 7020,
    "class": "colombia"
  },
  {
    "country": "Costa Rica",
    "continent": "North America",
    "wins": 3,
    "losses": 6,
    "draws": 1,
    "best": 16,
    "odds": 0.04,
    "fullOdds": "2500 to 1",
    "bestYear": 1990,
    "population": 4805000,
    "gdp": 45100000000,
    "income": 8820,
    "class": "costa-rica"
  },
  {
    "country": "Croatia",
    "continent": "Europe",
    "wins": 6,
    "losses": 5,
    "draws": 2,
    "thirds": [1998],
    "best": 3,
    "odds": 0.57,
    "fullOdds": "175 to 1",
    "bestYear": 1998,
    "population": 4268000,
    "gdp": 59320000000,
    "income": 13490,
    "class": "croatia"
  },
  {
    "country": "Ecuador",
    "continent": "South America",
    "wins": 3,
    "losses": 4,
    "draws": 0,
    "best": 16,
    "odds": 0.79,
    "fullOdds": "125 to 1",
    "bestYear": 2006,
    "population": 15490000,
    "gdp": 84040000000,
    "income": 5170,
    "class": "ecuador"
  },
  {
    "country": "England",
    "continent": "Europe",
    "wins": 26,
    "losses": 14,
    "draws": 19,
    "firsts": [1966],
    "fourths": [1990],
    "best": 1,
    "odds": 3.85,
    "fullOdds": "25 to 1",
    "champions": 1,
    "bestYear": 1966,
    "population": 63610000,
    "gdp": 2476000000000,
    "income": 38500,
    "class": "england"
  },
  {
    "country": "France",
    "continent": "Europe",
    "wins": 25,
    "losses": 18,
    "draws": 11,
    "firsts": [1998],
    "seconds": [2006],
    "thirds": [1986, 1958],
    "fourths": [1982],
    "best": 1,
    "odds": 4.35,
    "fullOdds": "22 to 1",
    "champions": 1,
    "bestYear": 1998,
    "population": 65700000,
    "gdp": 2611000000000,
    "income": 41850,
    "class": "france"
  },
  {
    "country": "Germany",
    "continent": "Europe",
    "wins": 60,
    "losses": 20,
    "draws": 19,
    "firsts": [1990, 1974, 1954],
    "seconds": [2002, 1986, 1982, 1966],
    "thirds": [2010, 2006, 1970, 1934],
    "fourths": [1958],
    "best": 1,
    "odds": 14.29,
    "fullOdds": "6 to 1",
    "champions": 3,
    "bestYear": [1990, 1974, 1954],
    "population": 80430000,
    "gdp": 3426000000000,
    "income": 45170,
    "class": "germany"
  },
  {
    "country": "Ghana",
    "continent": "Africa",
    "wins": 4,
    "losses": 3,
    "draws": 2,
    "best": 8,
    "odds": 0.5,
    "fullOdds": "200 to 1",
    "bestYear": 2010,
    "population": 25370000,
    "gdp": 40710000000,
    "income": 1550,
    "class": "ghana"
  },
  {
    "country": "Greece",
    "continent": "Europe",
    "wins": 1,
    "losses": 5,
    "draws": 0,
    "best": 24,
    "odds": 0.5,
    "fullOdds": "200 to 1",
    "bestYear": 2010,
    "population": 11090000,
    "gdp": 248900000000,
    "income": 23710,
    "class": "greece"
  },
  {
    "country": "Honduras",
    "continent": "North America",
    "wins": 0,
    "losses": 3,
    "draws": 3,
    "best": 24,
    "odds": 0.07,
    "fullOdds": "1500 to 1",
    "bestYear": 1982,
    "population": 7936000,
    "gdp": 18430000000,
    "income": 2120,
    "class": "honduras"
  },
  {
    "country": "Iran",
    "continent": "Asia",
    "wins": 1,
    "losses": 6,
    "draws": 2,
    "best": 24,
    "odds": 0.04,
    "fullOdds": "2500 to 1",
    "bestYear": 1998,
    "population": 76420000,
    "gdp": 552400000000,
    "income": 4330,
    "class": "iran"
  },
  {
    "country": "Italy",
    "continent": "Europe",
    "wins": 44,
    "losses": 15,
    "draws": 21,
    "firsts": [2006, 1982, 1938, 1934],
    "seconds": [1994, 1970],
    "thirds": [1990],
    "fourths": [1978],
    "best": 1,
    "odds": 3.85,
    "fullOdds": "25 to 1",
    "champions": 4,
    "bestYear": [2006, 1982,  1938, 1934],
    "population": 59540000,
    "gdp": 2013000000000,
    "income": 34720,
    "class": "italy"
  },
  {
    "country": "Ivory Coast",
    "continent": "Africa",
    "wins": 2,
    "draws": 1,
    "losses": 3,
    "best": 24,
    "odds": 0.66,
    "fullOdds": "150 to 1",
    "bestYear": 2010,
    "population": 19840000,
    "gdp": 24680000000,
    "income": 1220,
    "class": "ivory-coast"
  },
  {
    "country": "Japan",
    "continent": "Asia",
    "wins": 4,
    "losses": 7,
    "draws": 3,
    "best": 16,
    "odds": 0.66,
    "fullOdds": "150 to 1",
    "bestYear": 2010,
    "population": 127600000,
    "gdp": 5961000000000,
    "income": 47870,
    "class": "japan"
  },
  {
    "country": "Mexico",
    "continent": "North America",
    "wins": 12,
    "losses": 24,
    "draws": 13,
    "best": 8,
    "odds": 0.5,
    "fullOdds": "200 to 1",
    "bestYear": 1986,
    "population": 120800000,
    "gdp": 1178000000000,
    "income": 9640,
    "class": "mexico"
  },
  {
    "country": "Netherlands",
    "continent": "Europe",
    "wins": 22,
    "losses": 11,
    "draws": 10,
    "seconds": [2010, 1978, 1974],
    "fourths": [1998],
    "best": 2,
    "odds": 3.45,
    "fullOdds": "28 to 1",
    "bestYear": [2010, 1978, 1974],
    "population": 16750000,
    "gdp": 770100000000,
    "income": 48110,
    "class": "netherlands"
  },
  {
    "country": "Nigeria",
    "continent": "Africa",
    "wins": 4,
    "losses": 8,
    "draws": 2,
    "best": 16,
    "odds": 0.33,
    "fullOdds": "300 to 1",
    "bestYear": 1998,
    "population": 168800000,
    "gdp": 459600000000,
    "income": 2490,
    "class": "nigeria"
  },
  {
    "country": "Portugal",
    "continent": "Europe",
    "wins": 12,
    "losses": 8,
    "draws": 3,
    "thirds": [1966],
    "fourths": [2006],
    "best": 3,
    "odds": 4.35,
    "fullOdds": "22 to 1",
    "bestYear": 1966,
    "population": 10510000,
    "gdp": 212100000000,
    "income": 20690,
    "class": "portgual"
  },
  {
    "country": "Russia",
    "continent": "Asia",
    "wins": 2,
    "losses": 4,
    "draws": 0,
    "best": 24,
    "odds": 1.23,
    "fullOdds": "80 to 1",
    "bestYear": 2002,
    "population": 143500000,
    "gdp": 2015000000000,
    "income": 12700,
    "class": "russia"
  },
  {
    "country": "South Korea",
    "continent": "Asia",
    "wins": 5,
    "losses": 15,
    "draws": 8,
    "fourths": [2002],
    "best": 4,
    "odds": 0.4,
    "fullOdds": "250 to 1",
    "bestYear": 1998,
    "population": 50000000,
    "gdp": 1130000000000,
    "income": 22670,
    "class": "south-korea"
  },
  {
    "country": "Spain",
    "continent": "Europe",
    "wins": 28,
    "losses": 16,
    "draws": 12,
    "firsts": [2010],
    "fourths": [1950],
    "best": 1,
    "odds": 14.29,
    "fullOdds": "6 to 1",
    "champions": 1,
    "bestYear": 2010,
    "population": 46760000,
    "gdp": 1322000000000,
    "income": 29340,
    "class": "spain"
  },
  {
    "country": "Switzerland",
    "continent": "Europe",
    "wins": 9,
    "losses": 14,
    "draws": 6,
    "best": 8,
    "odds": 0.99,
    "fullOdds": "100 to 1",
    "bestYear": 1954,
    "population": 7997000,
    "gdp": 631200000000,
    "income": 80970,
    "class": "switzerland"
  },
  {
    "country": "Uruguay",
    "continent": "South America",
    "wins": 18,
    "losses": 17,
    "draws": 12,
    "firsts": [1950, 1930],
    "fourths": [2010, 1970, 1954],
    "best": 1,
    "champions": 2,
    "odds": 3.45,
    "fullOdds": "28 to 1",
    "bestYear": [1950, 1930],
    "population": 3395000,
    "gdp": 49920000000,
    "income": 13580,
    "class": "uruguay"
  },
  {
    "country": "United States",
    "continent": "North America",
    "wins": 7,
    "losses": 17,
    "draws": 5,
    "thirds": [1930],
    "best": 3,
    "odds": 0.4,
    "fullOdds": "250 to 1",
    "bestYear": 1930,
    "population": 313900000,
    "gdp": 16240000000000,
    "income": 52340,
    "class": "united-states"
  }
];

var dataByCountry = {};
for (var i = 0; i < data.length; i++)
  dataByCountry[data[i].country] = data[i];

var graphRecords = function() {
  var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
  var y = d3.scale.linear().range([height, 0]);

  var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
    var flag = country.toLowerCase().replace(/ /g, '-');
    var data = dataByCountry[country];
    svg.append("image")
      .attr("x", x(country))
      .attr("y", height + 5)
      .attr("width", x.rangeBand())
      .attr("height", 18)
      .attr("xlink:href", "./assets/flags/"+ flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr("class", "flag")
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country + " " + data.wins + "-" + data.draws + "-" + data.losses);

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
      .attr("height", function(d) { return height - y(d.wins); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " " + d.wins + " wins"; });

  svg.selectAll(".draws")
      .data(records)
    .enter().append("rect")
      .attr("class", function(d) { return "bar draws "+ d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.losses + d.draws); })
      .attr("height", function(d) { return height - y(d.draws); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " " + d.draws + " draws"; });

  svg.selectAll(".losses")
      .data(records)
    .enter().append("rect")
      .attr("class", function(d) { return "bar losses "+ d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.losses); })
      .attr("height", function(d) { return height - y(d.losses); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " " + d.losses + " losses"; });

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

var graphTopFinishes = function() {
  var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
  var y = d3.scale.linear().range([height, 0]);

  var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
    var flag = country.toLowerCase().replace(/ /g, '-');
    svg.append("image")
      .attr("x", x(country))
      .attr("y", height + 5)
      .attr("width", x.rangeBand())
      .attr("height", 18)
      .attr("xlink:href", "./assets/flags/"+ flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr('class', 'flag')
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country);
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
      .attr("height", function(d) { return Math.max(0, height - y(33 - d.best)); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "top")
      .attr("title", function(d) { return d.country; });

  var years = finishes.filter(function(d) { return !!d.bestYear && (d.bestYear.length > 0 || +d.bestYear > 0); });
  for (var i = 0; i < years.length; i++)
    svg.selectAll(".years-" + years[i].country)
        .data(years[i].bestYear.length > 0 ? years[i].bestYear : [years[i].bestYear])
      .enter().append("text")
        .attr("class", "years")
        .attr("x", function(d) { return x(years[i].country) + 12; })
        .attr("y", function(d, k) { return y(1) - (16 * (k + 1)); })
        .attr("dy", ".71em")
        .text(function(bestYear) { return bestYear; });

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

var graphTopFourFinishes = function() {
  var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
  var y = d3.scale.linear().range([height, 0]);

  var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
    var flag = country.toLowerCase().replace(/ /g, '-');
    var data = dataByCountry[country];
    svg.append("image")
      .attr("x", x(country))
      .attr("y", height + 5)
      .attr("width", x.rangeBand())
      .attr("height", 18)
      .attr("xlink:href", "./assets/flags/"+ flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr("class", "flag")
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country);

    return '';
  });

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10, "s");

  var svg = d3.select("svg.top-4")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var finishes = data.slice().sort(function(a, b) {
    var firstA  = a.firsts  ? a.firsts.length  : 0;
    var secondA = a.seconds ? a.seconds.length : 0;
    var thirdA  = a.thirds  ? a.thirds.length  : 0;
    var fourthA = a.fourths ? a.fourths.length : 0;

    var firstB  = b.firsts  ? b.firsts.length  : 0;
    var secondB = b.seconds ? b.seconds.length : 0;
    var thirdB  = b.thirds  ? b.thirds.length  : 0;
    var fourthB = b.fourths ? b.fourths.length : 0;

    var totalA = firstA + secondA + thirdA + fourthA;
    var totalB = firstB + secondB + thirdB + fourthB;
    if (totalA === totalB) {
      if (firstA !== firstB)
        return firstA - firstB;
      if (secondA !== secondB)
        return secondA - secondB;
      if (thirdA !== thirdB)
        return thirdA - thirdB;
      if (fourthA !== fourthB)
        return fourthA - fourthB;
      if (a.wins !== b.wins)
        return a.wins - b.wins;
      else if (a.draws !== b.draws)
        return a.draws - b.draws;
      return b.losses - a.losses;
    }
    return totalA - totalB;
  });

  x.domain(finishes.map(function(d) { return d.country; }));
  y.domain([0, d3.max(finishes, function(d) {
    var firsts  = d.firsts   ? d.firsts.length : 0;
    var seconds = d.seconds  ? d.seconds.length : 0;
    var thirds  = d.thirds   ? d.thirds.length : 0;
    var fourths = d.fourths  ? d.fourths.length : 0;
    return firsts + seconds + thirds + fourths;
  })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

  svg.selectAll(".firsts")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-1 " + d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) {
        var firsts   = d.firsts  ? d.firsts.length : 0;
        var seconds  = d.seconds ? d.seconds.length : 0;
        var thirds   = d.thirds  ? d.thirds.length : 0;
        var fourths  = d.fourths ? d.fourths.length : 0;
        return y(firsts + seconds + thirds + fourths);
      })
      .attr("height", function(d) { return height - y(d.firsts ? d.firsts.length : 0); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " Wins: " + (d.firsts ? d.firsts.length : 0); });

  svg.selectAll(".seconds")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-2 "+ d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) {
        var seconds  = d.seconds ? d.seconds.length : 0;
        var thirds   = d.thirds  ? d.thirds.length : 0;
        var fourths  = d.fourths ? d.fourths.length : 0;
        return y(seconds + thirds + fourths);
      })
      .attr("height", function(d) { return height - y(d.seconds ? d.seconds.length : 0); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " Runner up: " + (d.seconds ? d.seconds.length : 0); });

  svg.selectAll(".thirds")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-3 "+ d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.losses); })
      .attr("y", function(d) {
        var thirds   = d.thirds ? d.thirds.length : 0;
        var fourths  = d.fourths ? d.fourths.length : 0;
        return y(thirds + fourths);
      })
      .attr("height", function(d) { return height - y(d.thirds ? d.thirds.length : 0); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " 3rd place: " + (d.thirds ? d.thirds.length : 0); });

  svg.selectAll(".fourths")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-4 "+ d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.fourths ? d.fourths.length : 0); })
      .attr("height", function(d) { return height - y(d.fourths ? d.fourths.length : 0); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " 4th place: " + (d.fourths ? d.fourths.length : 0); });

  for (var i = 0; i < finishes.length; i++) {
    var d = finishes[i];

    if (d.firsts) {
      svg.selectAll(".firsts-" + d.country)
          .data(d.firsts)
        .enter().append("text")
          .attr("class", "years")
          .attr("x", function() { return x(d.country) + 12; })
          .attr("y", function(_d, k) {
            var seconds  = d.seconds ? d.seconds.length : 0;
            var thirds   = d.thirds  ? d.thirds.length : 0;
            var fourths  = d.fourths ? d.fourths.length : 0;
            return y(seconds + thirds + fourths) - (16 * (k + 1));
          })
          .attr("dy", ".71em")
          .text(function(year) { return year; });
    }

    if (d.seconds) {
      svg.selectAll(".second-years-" + d.country)
          .data(d.seconds)
        .enter().append("text")
          .attr("class", "years")
          .attr("x", function() { return x(d.country) + 12; })
          .attr("y", function(_d, k) {
            var thirds   = d.thirds  ? d.thirds.length : 0;
            var fourths  = d.fourths ? d.fourths.length : 0;
            return y(thirds + fourths) - (16 * (k + 1));
          })
          .attr("dy", ".71em")
          .text(function(year) { return year; });
    }

    if (d.thirds) {
      svg.selectAll(".third-years-" + d.country)
          .data(d.thirds)
        .enter().append("text")
          .attr("class", "years")
          .attr("x", function() { return x(d.country) + 12; })
          .attr("y", function(_d, k) {
            var fourths  = d.fourths ? d.fourths.length : 0;
            return y(fourths) - (16 * (k + 1));
          })
          .attr("dy", ".71em")
          .text(function(year) { return year; });
    }

    if (d.fourths) {
      svg.selectAll(".third-years-" + d.country)
          .data(d.fourths)
        .enter().append("text")
          .attr("class", "years")
          .attr("x", function() { return x(d.country) + 12; })
          .attr("y", function(_d, k) {
            return y(0) - (16 * (k + 1));
          })
          .attr("dy", ".71em")
          .text(function(year) { return year; });
    }
  }

  var legend = svg.selectAll(".legend")
      .data(["1st", "2nd", "3rd", "4th"])
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
      .attr("xlink:href", "./assets/flags/"+ flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr('class', 'flag')
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country + " " + dataByCountry[country].odds + "%" + " (" + dataByCountry[country].fullOdds + ")");
    return '';
  });

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(5).tickFormat(function(odds) {
    return odds + "%";
  });

  var svg = d3.select("svg.odds")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var odds = data.slice().sort(function(a, b) {
    return a.odds - b.odds;
  });

  x.domain(odds.map(function(d) { return d.country; }));
  y.domain([0, d3.max(odds, function(d) { return d.odds; })]);

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
        if (d.odds > 20)
          return "bar odds-20";
        if (d.odds > 10)
          return "bar odds-10";
        if (d.odds > 1)
          return "bar odds-1";
        return "bar odds-not-1";
      })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.odds); })
      .attr("height", function(d) { return height - y(d.odds); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "top")
      .attr("title", function(d) { return d.country + " " + d.odds + "%" + " (" + d.fullOdds + ")" });

  var legend = svg.selectAll(".legend")
      .data(["> 20%", "> 10%", "> 1%", "< 1%"])
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
          return "odds-20";
        case 1:
          return "odds-10";
        case 2:
          return "odds-1";
        case 3:
          return "odds-not-1";
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
  var titleFormat = d3.format(' $s');

  var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
    var flag = country.toLowerCase().replace(/ /g, '-');
    svg.append("image")
      .attr("x", x(country))
      .attr("y", height + 5)
      .attr("width", x.rangeBand())
      .attr("height", 18)
      .attr("xlink:href", "./assets/flags/"+ flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr('class', 'flag')
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country + titleFormat(dataByCountry[country].gdp).replace(/G/, 'B'));
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
        return "bar gdp-not-quarter-trillion";
      })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.gdp); })
      .attr("height", function(d) { return height - y(d.gdp); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "top")
      .attr("title", function(d) { return d.country + titleFormat(d.gdp).replace(/G/, 'B') });

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
  var titleFormat = d3.format(' s');

  var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
    var flag = country.toLowerCase().replace(/ /g, '-');
    svg.append("image")
      .attr("x", x(country))
      .attr("y", height + 5)
      .attr("width", x.rangeBand())
      .attr("height", 18)
      .attr("xlink:href", "./assets/flags/"+ flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr('class', 'flag')
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country + titleFormat(dataByCountry[country].population));
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
        return "bar population-not-10-million";
      })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.population); })
      .attr("height", function(d) { return height - y(d.population); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "top")
      .attr("title", function(d) { return d.country + titleFormat(d.population) });

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

var graphIncome = function() {
  var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
  var y = d3.scale.linear().range([height, 0]);
  var titleFormat = d3.format(' $,d');

  var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
    var flag = country.toLowerCase().replace(/ /g, '-');
    svg.append("image")
      .attr("x", x(country))
      .attr("y", height + 5)
      .attr("width", x.rangeBand())
      .attr("height", 18)
      .attr("xlink:href", "./assets/flags/"+ flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr('class', 'flag')
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country + titleFormat(dataByCountry[country].income));
    return '';
  });

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10, "$s");

  var svg = d3.select("svg.income")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var income = data.slice().sort(function(a, b) {
    return a.income - b.income;
  });

  x.domain(income.map(function(d) { return d.country; }));
  y.domain([1, d3.max(income, function(d) { return d.income; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

  svg.selectAll(".income")
      .data(income)
    .enter().append("rect")
      .attr("class", function(d) {
        if (d.income >= 50000)
          return "bar income-50k";
        if (d.income >= 30000)
          return "bar income-30k";
        if (d.income >= 15000)
          return "bar income-15k";
        if (d.income >= 5000)
          return "bar income-5k";
        return "bar income-not-5k";
      })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.income); })
      .attr("height", function(d) { return height - y(d.income); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "top")
      .attr("title", function(d) { return d.country + titleFormat(d.income); });

  var legend = svg.selectAll(".legend")
      .data(["$50,000+", "$30,000+", "$15,000+", "$5,000+", "< $5,000"])
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
          return "income-50k";
        case 1:
          return "income-30k";
        case 2:
          return "income-15k";
        case 3:
          return "income-5k";
        case 4:
          return "income-not-5k";
        }
      });

  legend.append("text")
      .attr("x", 20)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function(d) { return d; });
}

graphRecords();
graphTopFinishes();
graphTopFourFinishes();
graphOdds();
graphGdp();
graphPopulation();
graphIncome();
