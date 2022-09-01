var xValues = ["HTML", "CSS", "Javascript", "Python"];
var yValues = [89, 75, 70, 55, 50];
var barColors = "#68BBE3";

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "My tech skills"
    }
  }
});