//Line Chart
var lineData = {
  labels: ['11 Nov', '12 Nov', '13 Nov', '14 Nov', '15 Nov'],
  datasets: [
    {
      fillColor: 'rgba(190, 0, 0, 0.5)',
      strokeColor: 'rgba(256, 0, 0, 1)',
      pointColor: 'rgba(256, 0, 0, 1)',
      pointStrokeColor: '#fff',
      data: [100, 93, 85, 120, 132]
    },
    {
      fillColor: 'rgba(0, 0, 190, 0.5)',
      strokeColor: 'rgba(0, 0, 256, 1)',
      pointColor: 'rgba(0, 0, 256, 1)',
      pointStrokeColor: '#fff',
      data: [50, 70, 150, 123, 138]
    }
  ]
};

//Bar Chart
var barData = {
  labels: ['11 Nov', '12 Nov', '13 Nov', '14 Nov', '15 Nov'],
  datasets: [
    {
      fillColor: 'rgba(190, 0, 0, 0.5)',
      strokeColor: 'rgba(256, 0, 0, 1)',
      data: [100, 93, 85, 120, 132]
    },
    {
      fillColor: 'rgba(0, 0, 190, 0.5)',
      strokeColor: 'rgba(0, 0, 256, 1)',
      data: [50, 70, 150, 123, 138]
    }
  ]
};

//Doughnut Chart
var doughnutData = [
  { value: 30, color: "#00F" },
  { value: 50, color: "#F00" },
  { value: 40, color: "#FF0" }
];
