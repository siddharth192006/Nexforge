
    // Initialize EmailJS with your User ID
    (function() {
        emailjs.init("YOUR_USER_ID"); // Replace with your User ID from EmailJS
    })();

    // JavaScript to handle the form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Prepare email parameters
        const emailParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Use EmailJS to send the email
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams)
            .then(function(response) {
                alert("Email sent successfully!");
                console.log("Success:", response);
            }, function(error) {
                alert("Failed to send email. Please try again.");
                console.error("Error:", error);
            });
    });
