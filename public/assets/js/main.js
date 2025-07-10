  // Initialize Granim.js gradient background
  const granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ['#ff9966', '#ff5e62'],
          ['#00F260', '#0575E6'],
          ['#e1eec3', '#f05053']
        ],
        transitionSpeed: 4000
      }
    }
  });

// Initialize Glide
new Glide('.glide', {
    type: 'carousel',
    autoplay: 3000
}).mount();

// Initialize Leaflet Map
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers
L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Paris");
L.marker([51.5074, -0.1278]).addTo(map).bindPopup("London");
L.marker([35.6895, 139.6917]).addTo(map).bindPopup("Tokyo");
L.marker([22.3193, 114.1694]).addTo(map).bindPopup("Hong Kong");
L.marker([-33.8688, 151.2093]).addTo(map).bindPopup("Sydney");

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
  });
  
  
  // Create Chart.js bar chart
  const ctx = document.getElementById('travelChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['London', 'Hong Kong', 'Sydney'],
      datasets: [{
        label: 'Visitors (in millions)',
        data: [15, 18, 10],
        backgroundColor: ['#36a2eb', '#ff6384', '#ffce56']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: false }
      }
    }
  });
  
  // Create Chart.js line chart for average ticket price by month
const priceCanvas = document.getElementById('priceChart');
if (priceCanvas) {
  const priceCtx = priceCanvas.getContext('2d');
  new Chart(priceCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Avg Ticket Price ($)',
        data: [1200, 1150, 1100, 1080, 1120, 1300, 1400, 1450, 1250, 1100, 1050, 1150],
        fill: false,
        borderColor: '#4bc0c0',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'Average Ticket Price by Month'
        }
      }
    }
  });
}