document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill out all fields.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Form submitted successfully!");
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});

