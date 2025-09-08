// ========== Skills Bar Chart ==========
const skillsCtx = document.getElementById("skillsChart").getContext("2d");
new Chart(skillsCtx, {
  type: "bar",
  data: {
    labels: [
      "Python", "SQL", "SAS", "R", "Excel", "Tableau", "Power BI",
      "Machine Learning", "Data Visualization", "Statistics"
    ],
    datasets: [{
      label: "Skill Proficiency (%)",
      data: [100, 85, 70, 75, 90, 80, 75, 65, 80, 85], 
      backgroundColor: "#ffb703",
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 20 }
      }
    }
  }
});

// ========== Techniques Pie Chart ==========
const techniquesCtx = document.getElementById("techniquesChart").getContext("2d");
new Chart(techniquesCtx, {
  type: "pie",
  data: {
    labels: ["Data Analytics", "Statistical Analysis", "Others"],
    datasets: [{
      data: [50, 25, 25], 
      backgroundColor: ["#ffb703", "#219ebc", "#8ecae6"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
});
