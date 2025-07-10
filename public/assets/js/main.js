// Initialize Granim.js gradient background
const granimInstance = new Granim({
  element: '#granim-canvas',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ['#fde2f3', '#d0e7ff'],
        ['#e0f7fa', '#cce5ff'],
        ['#fff1cc', '#ffd6d6']
      ],
      transitionSpeed: 4000
    }
  }
});

// Initialize Glide - for hero section
new Glide('.glide', {
  type: 'carousel',
  autoplay: 3000
}).mount();

// Initialize Leaflet Map
const map = L.map('map').setView([50, 0], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
// Add markers
L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Hello from Paris!");
L.marker([51.5074, -0.1278]).addTo(map).bindPopup("Hello from London!");
L.marker([35.6895, 139.6917]).addTo(map).bindPopup("Hello from Tokyo!");
L.marker([22.3193, 114.1694]).addTo(map).bindPopup("Hello from Hong Kong!");
L.marker([-33.8688, 151.2093]).addTo(map).bindPopup("Hello from Sydney!");

// Create Chart.js bar chart
// Top Travel Destination Bar Chart
(async function () {
  const data = [
    { location: "London", visitors: 15 },
    { location: "Paris", visitors: 22 },
    { location: "Tokyo", visitors: 33 },
    { location: "Hong Kong", visitors: 9 },
    { location: "Sydney", visitors: 18 },
  ];

  new Chart(
    document.getElementById('travelChart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.location),
        datasets: [
          {
            label: 'Visitors by year',
            data: data.map(row => row.visitors),
            options: {
              responsive: true,
            }
          }]
      }
    });
})();

// Average Ticket Price Line Chart
(async function () {
  const dataTix = [
    { month: "Jan", price: 1200 },
    { month: "Feb", price: 1150 },
    { month: "Mar", price: 1100 },
    { month: "Apr", price: 1080 },
    { month: "May", price: 1120 },
    { month: "Jun", price: 1300 },
    { month: "Jul", price: 1400 },
    { month: "Aug", price: 1450 },
    { month: "Sep", price: 1250 },
    { month: "Oct", price: 1100 },
    { month: "Nov", price: 1050 },
    { month: "Dec", price: 1250 },
  ];

  new Chart(
    document.getElementById('priceChart'),
    {
      type: 'line',
      data: {
        labels: dataTix.map(row => row.month),
        datasets: [
          {
            label: 'Average Ticket Price (US$)',
            data: dataTix.map(row => row.price),
            options: {
              responsive: true,
            }
          }]
      }
    });
})();


// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});
