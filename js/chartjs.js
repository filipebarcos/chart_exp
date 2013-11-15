//Line Chart
var lineContext = document.getElementById('lineChart').getContext('2d'),
    lineChart = new Chart(lineContext).Line(lineData);

//Bar Chart
var barContext = document.getElementById('barChart').getContext('2d'),
    barChart = new Chart(barContext).Bar(barData);

//Doughnut Chart
var doughnutContext = document.getElementById('doughnutChart').getContext('2d'),
    doughnutChart = new Chart(doughnutContext).Doughnut(doughnutData);
