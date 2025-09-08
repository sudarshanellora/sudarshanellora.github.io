document.addEventListener("DOMContentLoaded", () => {
  // ================= Mobile Menu =================
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open'); // animate hamburger
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });

  // ================= Charts =================
  const skillLabels = ["Python","SQL","SAS","R","Excel","Tableau","Power BI","Tally","Statistics"];
  const skillValues = [90,70,75,78,95,82,80,90,92];
  const skillColors = ['#f6c85f','#66c2a5','#ff7f50','#8da0cb','#ffd86f','#e78ac3','#a6d8f2','#ff9999','#6ab0ff'];

  Plotly.newPlot("skillsChart", [{
    x: skillLabels,
    y: skillValues,
    type: "bar",
    marker: { color: skillColors },
    text: skillValues.map(v => v + "%"),
    textposition: "auto",
    hovertemplate: "<b>%{x}</b><br>Proficiency: %{y}%<extra></extra>"
  }], {
    title: "Proficiency",
    yaxis: { title: "Proficiency (%)", range: [0, 110] },
    xaxis: { automargin: true, tickangle: -25 },
    bargap: 0.18,
    margin: { t: 50, b: 120, l: 60, r: 20 }
  }, { responsive: true, displayModeBar: false });

  const techLabels = ["Data Visualization","Statistical Analysis","Data Analytics","Machine Learning","Deep Learning (basics)"];
  const techValues = [90,90,90,75,55];
  const techColors = ['#00a6ff','#005f73','#00b894','#ff6b6b','#9b59b6'];

  Plotly.newPlot("techniquesChart", [{
    x: techLabels,
    y: techValues,
    type: "bar",
    marker: { color: techColors },
    text: techValues.map(v => v + "%"),
    textposition: "auto",
    hovertemplate: "<b>%{x}</b><br>Proficiency: %{y}%<extra></extra>"
  }], {
    title: "Proficiency",
    yaxis: { title: "Proficiency (%)", range: [0, 110] },
    xaxis: { automargin: true, tickangle: -25 },
    bargap: 0.25,
    margin: { t: 50, b: 140, l: 60, r: 20 }
  }, { responsive: true, displayModeBar: false });

  // Resize charts on window resize
  window.addEventListener("resize", () => {
    Plotly.Plots.resize("skillsChart");
    Plotly.Plots.resize("techniquesChart");
  });
});
