// JavaScript for fetching IPv4 and IPv6 addresses and location
window.addEventListener('load', () => {
    // Fetch IPv4 and IPv6 addresses and location using ipinfo.io
    fetch('https://ipinfo.io/json')
        .then((response) => response.json())
        .then((data) => {
            const ipv4Address = data.ip;
            const ipv6Address = data.ip6 || 'N/A';
            const location = `${data.city}, ${data.region}, ${data.country}`;
            
            document.getElementById('ipv4-address').textContent = ipv4Address;
            document.getElementById('ipv6-address').textContent = ipv6Address;
            document.getElementById('location').textContent = location;
        })
        .catch((error) => {
            console.error('Error fetching IP and location data:', error);
            document.getElementById('ipv4-address').textContent = 'Unable to fetch IPv4 address';
            document.getElementById('ipv6-address').textContent = 'Unable to fetch IPv6 address';
            document.getElementById('location').textContent = 'Unable to fetch location';
        });
});

document.getElementById('dark-mode-toggle').addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
