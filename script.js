// JavaScript for fetching IP address and location
window.addEventListener('load', () => {
    // Fetch IP address and location
    fetch('https://ipinfo.io/json')
        .then((response) => response.json())
        .then((data) => {
            const ipAddress = data.ip;
            const location = `${data.city}, ${data.region}, ${data.country}`;
            
            document.getElementById('ip-address').textContent = ipAddress;
            document.getElementById('location').textContent = location;
        })
        .catch((error) => {
            console.error('Error fetching IP and location data:', error);
            document.getElementById('ip-address').textContent = 'Unable to fetch IP address';
            document.getElementById('location').textContent = 'Unable to fetch location';
        });
});

document.getElementById('dark-mode-toggle').addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
