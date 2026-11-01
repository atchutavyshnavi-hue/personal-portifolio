// Display current year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let isValid = true;

    feedback.textContent = "";
    feedback.className = "form-feedback";

    if (name.value.trim().length < 2) {
        name.classList.add("is-invalid");
        isValid = false;
    } else {
        name.classList.remove("is-invalid");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        email.classList.add("is-invalid");
        isValid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    if (subject.value.trim() === "") {
        subject.classList.add("is-invalid");
        isValid = false;
    } else {
        subject.classList.remove("is-invalid");
    }

    if (message.value.trim().length < 10) {
        message.classList.add("is-invalid");
        isValid = false;
    } else {
        message.classList.remove("is-invalid");
    }

    if (!isValid) {
        feedback.textContent =
            "Please correct the highlighted fields and try again.";
        feedback.classList.add("error");
        return;
    }

    feedback.textContent =
        "Form validated successfully! Connect a backend to send this message.";

    feedback.classList.add("success");
    contactForm.reset();
});