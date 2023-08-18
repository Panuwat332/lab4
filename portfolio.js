let favorite = {
  labels: ['Dog', 'Cat', 'Bird', 'Game', 'Sport'],
  datasets: [{
      label: 'Favorite',
      backgroundColor: [
          'rgb(255, 99, 132)',   // Python
          'rgb(54, 162, 235)',   // Lua
          'rgb(255, 205, 86)',   // JS (JavaScript)
          'rgb(75, 192, 192)',   // C/C++
          'rgb(153, 102, 255)'   // C#
      ],
      borderWidth: 1,
      data: [60, 90, 70, 100, 40]
  }]
};
const data = {
  labels: ['Dog', 'Cat', 'Bird', 'Game', 'Sport'],
  datasets: [{
    label: 'Favorite',
    data: [60, 90, 70, 100, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
const dataradar = {
  labels: [
    'Dog',
    'Cat',
    'Bird',
    'Game',
    'Sport',
  ],
  datasets: [{
    label: 'Favorite',
    data: [60, 90, 70, 100, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  } ]
};
document.addEventListener("DOMContentLoaded", function(){
    let ctx = document.getElementById('myChart').getContext('2d');

    let myBarChart = new Chart(document.getElementById('myChart').getContext('2d'), {
        type: 'bar',
        data: favorite,
        options: {}
    });
    let myBarChart2 = new Chart(document.getElementById('myChart2').getContext('2d'), {
      type: 'line',
      data: data,
      options: {}
    });
    let myBarChart3 = new Chart(document.getElementById('myChart3').getContext('2d'), {
      type: 'radar',
      data: dataradar,
      options: {}
    });
    let myBarChart4 = new Chart(document.getElementById('myChart4').getContext('2d'), {
      type: 'doughnut',
      data: favorite,
      options: {}
    });
})
