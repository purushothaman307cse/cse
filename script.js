/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* CLOSE MENU */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* FORM */

const form = document.getElementById("registrationForm");

const successMessage =
    document.getElementById("successMessage");

const newRegistration =
    document.getElementById("newRegistration");


/* SHOW ERROR */

function showError(id, message) {

    document.getElementById(id).textContent = message;

}


/* CLEAR ERRORS */

function clearErrors() {

    document.querySelectorAll(".error").forEach(function (error) {

        error.textContent = "";

    });

}


/* FORM SUBMISSION */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors();

    let isValid = true;


    /* GET VALUES */

    const name =
        document.getElementById("name").value.trim();

    const registerNumber =
        document.getElementById("registerNumber").value.trim();

    const department =
        document.getElementById("department").value;

    const year =
        document.getElementById("year").value;

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const eventSelection =
        document.getElementById("eventSelection").value;

    const message =
        document.getElementById("message").value.trim();

    const agreement =
        document.getElementById("agreement").checked;


    /* NAME VALIDATION */

    if (name === "") {

        showError(
            "nameError",
            "Please enter your name."
        );

        isValid = false;

    }
    else if (name.length < 3) {

        showError(
            "nameError",
            "Name must contain at least 3 characters."
        );

        isValid = false;

    }


    /* REGISTER NUMBER */

    if (registerNumber === "") {

        showError(
            "registerNumberError",
            "Please enter your register number."
        );

        isValid = false;

    }


    /* DEPARTMENT */

    if (department === "") {

        showError(
            "departmentError",
            "Please select your department."
        );

        isValid = false;

    }


    /* YEAR */

    if (year === "") {

        showError(
            "yearError",
            "Please select your year."
        );

        isValid = false;

    }


    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        showError(
            "emailError",
            "Please enter your email address."
        );

        isValid = false;

    }
    else if (!emailPattern.test(email)) {

        showError(
            "emailError",
            "Please enter a valid email address."
        );

        isValid = false;

    }


    /* MOBILE */

    const mobilePattern =
        /^[6-9][0-9]{9}$/;

    if (mobile === "") {

        showError(
            "mobileError",
            "Please enter your mobile number."
        );

        isValid = false;

    }
    else if (!mobilePattern.test(mobile)) {

        showError(
            "mobileError",
            "Enter a valid 10-digit mobile number."
        );

        isValid = false;

    }


    /* EVENT */

    if (eventSelection === "") {

        showError(
            "eventError",
            "Please select the event."
        );

        isValid = false;

    }


    /* AGREEMENT */

    if (!agreement) {

        showError(
            "agreementError",
            "Please confirm your information."
        );

        isValid = false;

    }


    /* SAVE REGISTRATION */

    if (isValid) {

        const registrationData = {

            participantName: name,

            registerNumber: registerNumber,

            department: department,

            year: year,

            email: email,

            mobile: mobile,

            event: eventSelection,

            message: message,

            registrationDate:
                new Date().toLocaleString()

        };


        /* GET OLD DATA */

        let registrations =
            JSON.parse(
                localStorage.getItem(
                    "eduVisionRegistrations"
                )
            ) || [];


        /* ADD NEW DATA */

        registrations.push(registrationData);


        /* SAVE DATA */

        localStorage.setItem(
            "eduVisionRegistrations",
            JSON.stringify(registrations)
        );


        /* SHOW SUCCESS */

        form.style.display = "none";

        successMessage.style.display = "block";

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

});


/* NEW REGISTRATION */

newRegistration.addEventListener("click", function () {

    form.reset();

    clearErrors();

    successMessage.style.display = "none";

    form.style.display = "block";

    form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});