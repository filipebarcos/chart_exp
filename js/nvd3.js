var LineGraph = function() {
  var chart = nv.models.lineChart();

  chart.xAxis
       .axisLabel('Nov')
       .tickFormat(d3.format('d'));

  chart.yAxis
       .axisLabel('oO')
       .tickFormat(d3.format('d'));

  d3.select('#lineChart svg')
    .datum(data)
    .transition().duration(500)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
};

var BarGraph = function() {
  var chart = nv.models.multiBarChart();

  d3.select('#barChart svg')
    .datum(data)
    .transition().duration(500)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
};

var DonutGraph = function() {
  var chart = nv.models.pieChart()
                .x(function(d) { return d.label })
                .y(function(d) { return d.value })
                .showLabels(true);

  d3.select('#donutChart svg')
    .datum(donutData)
    .transition().duration(1000)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
};

nv.addGraph(LineGraph);
nv.addGraph(BarGraph);
nv.addGraph(DonutGraph);
