// Validation for first name - adding error text and red border

let NameValidation = () => {
    let name = document.getElementById("first-name").value;
    let errorText = document.getElementById("name-error");
    let errorBorder = document.getElementById("first-name");
    
    if (name == "") {
        errorText.innerHTML = "⛔ First Name is invalid.";
        errorText.classList.add("error-text");
        errorBorder.classList.add("error-border");
    }

    else if (name !== "") {
        errorText.innerHTML = "";
        errorText.classList.remove("error-text");
        errorBorder.classList.remove("error-border");
    }
};

document.getElementById("first-name").addEventListener("focusout", NameValidation);

// Validation for last name - adding error text and red border

let LastNameValidation = () => {
    let lastname = document.getElementById("last-name").value;
    let errorText = document.getElementById("lastname-error");
    let errorBorder = document.getElementById("last-name");
    
    if (lastname == "") {
        errorText.innerHTML = "⛔ Last Name is invalid.";
        errorText.classList.add("error-text");
        errorBorder.classList.add("error-border");
    }

    else if (lastname !== "") {
        errorText.innerHTML = "";
        errorText.classList.remove("error-text");
        errorBorder.classList.remove("error-border");
    }
};

document.getElementById("last-name").addEventListener("focusout", LastNameValidation);

// Validation for email - adding error text and red border

let EmailValidation = () => {
    let validRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let email = document.getElementById("email").value;
    let errorText = document.getElementById("email-error");
    let errorBorder = document.getElementById("email");
    let emailCheck;

    if (validRegex.test(email)) {
        emailCheck = true;
    }
    else {
        emailCheck = false;
    }
    
    
    if (emailCheck == false) {
        errorText.innerHTML = "⛔ Email is invalid.";
        errorText.classList.add("error-text");
        errorBorder.classList.add("error-border");
    }
    
    else if (emailCheck == true) {
        errorText.innerHTML = "";
        errorText.classList.remove("error-text");
        errorBorder.classList.remove("error-border");
    }
};

document.getElementById("email").addEventListener("focusout", EmailValidation);

// Validation for password - adding error text and red border

let PassValidation = () => {
    let Regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,32})\S$/;
    let pass = document.getElementById("pass").value;
    let errorText = document.getElementById("pass-error");
    let errorBorder = document.getElementById("pass");
    let passCheck;
    
    if (Regex.test(pass)) {
        passCheck = true;
    }
    else {
        passCheck = false;
    }

    if (passCheck == false) {
        errorText.innerHTML = "⛔ Password is invalid.";
        errorText.classList.add("error-text");
        errorBorder.classList.add("error-border");
    }

    else if (passCheck == true) {
        errorText.innerHTML = "";
        errorText.classList.remove("error-text");
        errorBorder.classList.remove("error-border");
    }
};

document.getElementById("pass").addEventListener("focusout", PassValidation);