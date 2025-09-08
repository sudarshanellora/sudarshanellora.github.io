document.addEventListener("DOMContentLoaded", function () {
  // Skills Bar Chart
  const ctxSkills = document.getElementById('skillsChart');
  if (ctxSkills) {
    new Chart(ctxSkills, {
      type: 'bar',
      data: {
        labels: ['Python', 'SQL', 'R', 'Tableau', 'Power BI', 'Trello', 'Tally', 'MS Office'],
        datasets: [{
          label: 'Proficiency',
          data: [90, 85, 75, 80, 80, 70, 60, 95],
          backgroundColor: [
            '#1f77b4','#ff7f0e','#2ca02c','#d62728',
            '#9467bd','#8c564b','#e377c2','#7f7f7f'
          ],
          borderRadius: 8
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: { min: 0, max: 100, grid: { display: false }},
          y: { grid: { display: false }}
        }
      }
    });
  }

  // Techniques Radar Chart
  const ctxTechniques = document.getElementById('techniquesChart');
  if (ctxTechniques) {
    new Chart(ctxTechniques, {
      type: 'radar',
      data: {
        labels: ['Data Analytics', 'Visualization', 'Machine Learning', 'Deep Learning', 'Statistical Analysis'],
        datasets: [{
          label: 'Proficiency',
          data: [90, 85, 70, 60, 88],
          backgroundColor: 'rgba(54, 162, 235, 0.3)',
          borderColor: 'rgba(54, 162, 235, 1)',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: { stepSize: 20 }
          }
        }
      }
    });
  }
});
