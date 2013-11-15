var lineChartOptions = {
  title: { text: 'Yo dawg' },
  xAxis: {
    categories: ['Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15']
  },
  yAxis: {
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  series: lineChartSeries
};

(function($) {
  $('#lineChart').highcharts(lineChartOptions);
  $('#barChart').highcharts(lineChartOptions);
  $('#donutChart').highcharts(lineChartOptions);
})(jQuery);
