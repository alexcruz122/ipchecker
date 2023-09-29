// JavaScript for fetching IP address, location, and ISP
window.addEventListener('load', () => {
    // Fetch IP address, location, and ISP using ipinfo.io
    fetch('https://ipinfo.io/json')
        .then((response) => response.json())
        .then((data) => {
            const ipAddress = data.ip;
            const location = `${data.city}, ${data.region}, ${data.country}`;
            const isp = data.org || 'N/A';
            
            document.getElementById('ip-address').textContent = ipAddress;
            document.getElementById('location').textContent = location;
            document.getElementById('isp').textContent = isp;
        })
        .catch((error) => {
            console.error('Error fetching IP, location, and ISP data:', error);
            document.getElementById('ip-address').textContent = 'Unable to fetch IP address';
            document.getElementById('location').textContent = 'Unable to fetch location';
            document.getElementById('isp').textContent = 'Unable to fetch ISP';
        });
});

document.getElementById('dark-mode-toggle').addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
