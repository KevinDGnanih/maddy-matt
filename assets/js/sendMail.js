function sendMail(contactForm) {
    emailjs.send("Gmail", "m&m", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Thank you!");
            },
            function (error) {
                console.log("FAILED", error);
                document.getElementById(reply).innertext = `<p>Please fill up all the sections.</p>`;
            });

    return false;
}