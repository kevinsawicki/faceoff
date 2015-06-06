var margin = {top: 20, right: 40, bottom: 30, left: 0};
var width = 950 - margin.left - margin.right;
var height = 480 - margin.top - margin.bottom;

var data = [
  {
    "country": "Australia",
    "continent": "Australia",
    "wins": 3,
    "losses": 10,
    "draws": 4,
    "best": 8,
    "bestYear": 2004,
    "population": 23861800,
    "gdp": 1560000000000,
    "income": 65400,
    "odds": 2.44,
    "fullOdds": "40 to 1",
    "class": "australia"
  },
  {
    "country": "Brazil",
    "continent": "South America",
    "wins": 15,
    "losses": 7,
    "draws": 4,
    "best": 2,
    "bestYear": 2007,
    "seconds": [2007],
    "thirds": [1999],
    "population": 204388000,
    "gdp": 2246000000000,
    "income": 11690,
    "odds": 13.33,
    "fullOdds": "13 to 2",
    "class": "brazil"
  },
  {
    "country": "Cameroon",
    "continent": "Africa",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 25,
    "population": 21143237,
    "gdp": 29570000000,
    "income": 1290,
    "odds": 0.4,
    "fullOdds": "250 to 1",
    "class": "cameroon"
  },
  {
    "country": "Canada",
    "continent": "North America",
    "wins": 4,
    "losses": 11,
    "draws": 3,
    "best": 4,
    "bestYear": 2003,
    "fourths": [2003],
    "population": 35702707,
    "gdp": 1827000000000,
    "income": 52210,
    "odds": 7.69,
    "fullOdds": "12 to 1",
    "class": "canada"
  },
  {
    "country": "China",
    "continent": "Asia",
    "wins": 13,
    "losses": 6,
    "draws": 5,
    "best": 2,
    "bestYear": 1999,
    "seconds": [1999],
    "fourths": [1995],
    "population": 1370130000,
    "gdp": 9240000000000,
    "income": 6560,
    "odds": 1.49,
    "fullOdds": "66 to 1",
    "class": "china"
  },
  {
    "country": "Colombia",
    "continent": "South America",
    "wins": 0,
    "losses": 2,
    "draws": 1,
    "best": 16,
    "bestYear": 2011,
    "population": 48150400,
    "gdp": 378400000000,
    "income": 7590,
    "odds": 0.66,
    "fullOdds": "150 to 1",
    "class": "colombia"
  },
  {
    "country": "Costa Rica",
    "continent": "North America",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 25,
    "population": 4773130,
    "gdp": 49620000000,
    "income": 9550,
    "odds": 0.25,
    "fullOdds": "400 to 1",
    "class": "costa-rica"
  },
  {
    "country": "Ecuador",
    "continent": "South America",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 25,
    "population": 15476000,
    "gdp": 94470000000,
    "income": 5760,
    "odds": 0.4,
    "fullOdds": "250 to 1",
    "class": "ecuador"
  },
  {
    "country": "England",
    "continent": "Europe",
    "wins": 5,
    "losses": 3,
    "draws": 4,
    "best": 8,
    "bestYear": 1995,
    "population": 64800000,
    "gdp": 2678000000000,
    "income": 41680,
    "odds": 4.76,
    "fullOdds": "20 to 1",
    "class": "england"
  },
  {
    "country": "France",
    "continent": "Europe",
    "wins": 3,
    "losses": 4,
    "draws": 2,
    "best": 4,
    "bestYear": 2011,
    "fourths": [2011],
    "population": 66139000,
    "gdp": 2806000000000,
    "income": 43520,
    "odds": 12.5,
    "fullOdds": "7 to 1",
    "class": "france"
  },
  {
    "country": "Germany",
    "continent": "Europe",
    "wins": 23,
    "losses": 6,
    "draws": 3,
    "best": 1,
    "bestYear": [2007, 2003],
    "champions": 2,
    "firsts": [2007, 2003],
    "seconds": [1995],
    "population": 81083600,
    "gdp": 3730000000000,
    "income": 47250,
    "odds": 25,
    "fullOdds": "3 to 1",
    "class": "germany"
  },
  {
    "country": "Ivory Coast",
    "continent": "Africa",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 25,
    "population": 22671331,
    "gdp": 31060000000,
    "income": 1450,
    "odds": 0.4,
    "fullOdds": "250 to 1",
    "class": "ivory-coast"
  },
  {
    "country": "Japan",
    "continent": "Asia",
    "wins": 7,
    "losses": 12,
    "draws": 3,
    "best": 1,
    "bestYear": 2011,
    "champions": 1,
    "firsts": [2011],
    "population": 126880000,
    "gdp": 4920000000000,
    "income": 46330,
    "odds": 11.11,
    "fullOdds": "8 to 1",
    "class": "japan"
  },
  {
    "country": "Mexico",
    "continent": "North America",
    "wins": 0,
    "losses": 4,
    "draws": 2,
    "best": 16,
    "bestYear": 2011,
    "population": 121005815,
    "gdp": 1261000000000,
    "income": 9940,
    "odds": 0.5,
    "fullOdds": "200 to 1",
    "class": "mexico"
  },
  {
    "country": "Netherlands",
    "continent": "Europe",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 25,
    "population": 16904700,
    "gdp": 853500000000,
    "income": 51060,
    "odds": 1.49,
    "fullOdds": "66 to 1",
    "class": "netherlands"
  },
  {
    "country": "New Zealand",
    "continent": "Zealandia",
    "wins": 0,
    "losses": 8,
    "draws": 1,
    "best": 16,
    "bestYear": 2011,
    "population": 4585670,
    "gdp": 185800000000,
    "income": 35760,
    "odds": 0.66,
    "fullOdds": "150 to 1",
    "class": "new-zealand"
  },
  {
    "country": "Nigeria",
    "continent": "Africa",
    "wins": 3,
    "losses": 14,
    "draws": 2,
    "best": 8,
    "bestYear": 1999,
    "population": 183523000,
    "gdp": 521800000000,
    "income": 2710,
    "odds": 0.5,
    "fullOdds": "200 to 1",
    "class": "nigeria"
  },
  {
    "country": "Norway",
    "continent": "Europe",
    "wins": 20,
    "losses": 9,
    "draws": 1,
    "best": 1,
    "bestYear": 1995,
    "champions": 1,
    "firsts": [1995],
    "seconds": [1991],
    "fourths": [2007, 1999],
    "population": 5176998,
    "gdp": 512600000000,
    "income": 102700,
    "odds": 3.85,
    "fullOdds": "25 to 1",
    "class": "norway"
  },
  {
    "country": "South Korea",
    "continent": "Asia",
    "wins": 0,
    "losses": 3,
    "draws": 0,
    "best": 16,
    "bestYear": 2003,
    "population": 51342881,
    "gdp": 1305000000000,
    "income": 25920,
    "odds": 1.49,
    "fullOdds": "66 to 1",
    "class": "south-korea"
  },
  {
    "country": "Spain",
    "continent": "Europe",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 25,
    "population": 46464053,
    "gdp": 1393000000000,
    "income": 29940,
    "odds": 1.96,
    "fullOdds": "50 to 1",
    "class": "spain"
  },
  {
    "country": "Sweden",
    "continent": "Europe",
    "wins": 18,
    "losses": 10,
    "draws": 1,
    "best": 2,
    "bestYear": 2003,
    "seconds": [2003],
    "thirds": [2011, 1991],
    "population": 9767357,
    "gdp": 579700000000,
    "income": 61710,
    "odds": 9.09,
    "fullOdds": "10 to 1",
    "class": "sweden"
  },
  {
    "country": "Switzerland",
    "continent": "Europe",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 25,
    "population": 8236600,
    "gdp": 685400000000,
    "income": 90680,
    "odds": 1.23,
    "fullOdds": "80 to 1",
    "class": "switzerland"
  },
  {
    "country": "Thailand",
    "continent": "Asia",
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "best": 25,
    "population": 65104000,
    "gdp": 387300000000,
    "income": 5340,
    "odds": 0.2,
    "fullOdds": "500 to 1",
    "class": "thailand"
  },
  {
    "country": "United States",
    "continent": "North America",
    "wins": 27,
    "losses": 4,
    "draws": 5,
    "best": 1,
    "bestYear": [1999, 1991],
    "champions": 2,
    "firsts": [1999, 1991],
    "seconds": [2011],
    "thirds": [2007, 2003, 1995],
    "population": 321107000,
    "gdp": 16770000000000,
    "income": 53470,
    "odds": 25,
    "fullOdds": "3 to 1",
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
      .attr("height", 20)
      .attr("xlink:href", "./assets/flags/" + flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr("class", "flag")
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country + " " + data.wins + "-" + data.draws + "-" + data.losses);

    return '';
  });

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10, "s");

  var svg = d3.select("#records-2015 svg.records")
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
      else if (b.losses !== a.losses)
        return b.losses - a.losses;
      else
        return a.country.localeCompare(b.country);
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
      .attr("class", function(d) { return "bar wins " + d.class; })
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
      .attr("class", function(d) { return "bar draws " + d.class; })
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
      .attr("class", function(d) { return "bar losses " + d.class; })
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
  var max = data.length + 1;
  var textXStart = 16;

  var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
    var flag = country.toLowerCase().replace(/ /g, '-');
    svg.append("image")
      .attr("x", x(country))
      .attr("y", height + 5)
      .attr("width", x.rangeBand())
      .attr("height", 20)
      .attr("xlink:href", "./assets/flags/" + flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr('class', 'flag')
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country);
    return '';
  });

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(0, "s");

  var svg = d3.select("#finishes-2015 svg.finishes")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var finishes = data.slice().sort(function(a, b) {
    if (a.best === b.best)
      if (a.best === 1 && b.best === 1 && a.champions !== b.champions)
        return a.champions - b.champions;
      else if (a.wins !== b.wins)
        return a.wins - b.wins;
      else
        return a.country.localeCompare(b.country);
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
      .attr("y", function(d) { return y(max - d.best); })
      .attr("height", function(d) { return Math.max(0, height - y(max - d.best)); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "top")
      .attr("title", function(d) { return d.country; });

  var years = finishes.filter(function(d) { return !!d.bestYear && (d.bestYear.length > 0 || +d.bestYear > 0); });
  for (var i = 0; i < years.length; i++)
    svg.selectAll(".years-" + years[i].country)
        .data(years[i].bestYear.length > 0 ? years[i].bestYear : [years[i].bestYear])
      .enter().append("text")
        .attr("class", "years")
        .attr("x", function(d) { return x(years[i].country) + textXStart; })
        .attr("y", function(d, k) { return y(1) - (16 * (k + 1)); })
        .attr("dy", ".71em")
        .text(function(bestYear) { return bestYear; });

  var legend = svg.selectAll(".legend")
      .data(["1st", "2nd", "3rd", "4th", "Quarterfinals", "Group Stage"])
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
  var textXStart = 16;

  var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(function(country) {
    var flag = country.toLowerCase().replace(/ /g, '-');
    var data = dataByCountry[country];
    svg.append("image")
      .attr("x", x(country))
      .attr("y", height + 5)
      .attr("width", x.rangeBand())
      .attr("height", 20)
      .attr("xlink:href", "./assets/flags/" + flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr("class", "flag")
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country);

    return '';
  });

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10, "s");

  var svg = d3.select("#top-4-2015 svg.top-4")
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

    var matchesA = a.wins + a.draws + a.losses;
    var matchesB = b.wins + b.draws + b.losses;

    if (matchesA === 0 && matchesB > 0)
      return -1;

    if (matchesB === 0 && matchesA > 0)
      return 1;

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
      else if (b.losses !== a.losses)
        return b.losses - a.losses;
      else
        return a.country.localeCompare(b.country);
    }
    return totalA - totalB;
  });

  x.domain(finishes.map(function(d) { return d.country; }));
  y.domain([0, d3.max(finishes, function(d) {
    var firsts  = d.firsts  ? d.firsts.length  : 0;
    var seconds = d.seconds ? d.seconds.length : 0;
    var thirds  = d.thirds  ? d.thirds.length  : 0;
    var fourths = d.fourths ? d.fourths.length : 0;
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
        var firsts  = d.firsts  ? d.firsts.length  : 0;
        var seconds = d.seconds ? d.seconds.length : 0;
        var thirds  = d.thirds  ? d.thirds.length  : 0;
        var fourths = d.fourths ? d.fourths.length : 0;
        return y(firsts + seconds + thirds + fourths);
      })
      .attr("height", function(d) { return height - y(d.firsts ? d.firsts.length : 0); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " 1st place: " + (d.firsts ? d.firsts.length : 0); });

  svg.selectAll(".seconds")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-2 " + d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) {
        var seconds = d.seconds ? d.seconds.length : 0;
        var thirds  = d.thirds  ? d.thirds.length  : 0;
        var fourths = d.fourths ? d.fourths.length : 0;
        return y(seconds + thirds + fourths);
      })
      .attr("height", function(d) { return height - y(d.seconds ? d.seconds.length : 0); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " 2nd place: " + (d.seconds ? d.seconds.length : 0); });

  svg.selectAll(".thirds")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-3 " + d.class; })
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.losses); })
      .attr("y", function(d) {
        var thirds  = d.thirds  ? d.thirds.length  : 0;
        var fourths = d.fourths ? d.fourths.length : 0;
        return y(thirds + fourths);
      })
      .attr("height", function(d) { return height - y(d.thirds ? d.thirds.length : 0); })
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "left")
      .attr("title", function(d) { return d.country + " 3rd place: " + (d.thirds ? d.thirds.length : 0); });

  svg.selectAll(".fourths")
      .data(finishes)
    .enter().append("rect")
      .attr("class", function(d) { return "bar best-4 " + d.class; })
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
          .attr("x", function() { return x(d.country) + textXStart; })
          .attr("y", function(_d, k) {
            var seconds = d.seconds ? d.seconds.length : 0;
            var thirds  = d.thirds  ? d.thirds.length  : 0;
            var fourths = d.fourths ? d.fourths.length : 0;
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
          .attr("x", function() { return x(d.country) + textXStart; })
          .attr("y", function(_d, k) {
            var thirds  = d.thirds  ? d.thirds.length  : 0;
            var fourths = d.fourths ? d.fourths.length : 0;
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
          .attr("x", function() { return x(d.country) + textXStart; })
          .attr("y", function(_d, k) {
            var fourths = d.fourths ? d.fourths.length : 0;
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
          .attr("x", function() { return x(d.country) + textXStart; })
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
      .attr("height", 20)
      .attr("xlink:href", "./assets/flags/" + flag + ".png")
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

  var svg = d3.select("#odds-2015 svg.odds")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var odds = data.slice().sort(function(a, b) {
    if (a.odds !== b.odds)
      return a.odds - b.odds;
    else
      return a.country.localeCompare(b.country);
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
      .attr("xlink:href", "./assets/flags/" + flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr('class', 'flag')
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country + titleFormat(dataByCountry[country].gdp).replace(/G/, 'B'));
    return '';
  });

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10, "$s");

  var svg = d3.select("#gdp-2015 svg.gdp")
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
      .attr("height", 20)
      .attr("xlink:href", "./assets/flags/" + flag + ".png")
      .attr("preserveAspectRatio", "none")
      .attr('class', 'flag')
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .attr("title", country + titleFormat(dataByCountry[country].population).replace(/G/, 'B'));
    return '';
  });

  var yAxis = d3.svg.axis().scale(y).orient("right").ticks(10).tickFormat(function(d) {
    return d3.format('s')(d).replace('G', 'B');
  });

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

  svg.selectAll("#population-2015 .population")
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
      .attr("title", function(d) { return d.country + titleFormat(d.population).replace(/G/, 'B'); });

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
      .attr("xlink:href", "./assets/flags/" + flag + ".png")
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

  svg.selectAll("#income-2015 .income")
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
