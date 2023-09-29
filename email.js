// Include the Email.js library by adding the following script tag to your HTML file:
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

// Initialize Email.js with your service ID
emailjs.init('YOUR_SERVICE_ID');

// Define a function to send the email
function sendEmail() {
    // Prevent the default form submission
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the email
    emailjs.send('service_tr67cd8', 'template_g763fnf', {
        from_name: name,
        from_email: email,
        message: message,
    }).then(
        function (response) {
            console.log('Email sent successfully', response);
            alert('Your message has been sent successfully.');
        },
        function (error) {
            console.log('Email send failed', error);
            alert('Sorry, there was an error sending your message.');
        }
    );
}

// Add a submit event listener to the form
document.getElementById('contact-form').addEventListener('submit', sendEmail);
