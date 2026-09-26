let username = document.getElementById("Username");
let password = document.getElementById("Password");
let phoneNumber = document.getElementById("PhoneNumber");
let order = document.getElementById("Order");

// For errosrs when happend
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");
let phoneError = document.getElementById("phoneError");

// Regex Patterns
let usernameRegex = /^\S+$/;
let passwordRegex = /^(?=.*\d).{8,}$/;
let phoneRegex = /^07\d{8}$/;

function submitForm() {
    let isValid = true; 

    //check the username
    if (!usernameRegex.test(username.value)) {
        usernameError.textContent = "Must not be empty and must not contain spaces.";
        isValid = false;

    } else {
        usernameError.textContent = ""; 
    }

    // check the password
    if (!passwordRegex.test(password.value)) {
        passwordError.textContent = "Must be at least 8 characters and contain at least one number.";
        isValid = false;

    } else {
        passwordError.textContent = "";
    }

    // check the phonenumber
    if (!phoneRegex.test(phoneNumber.value)) {
        phoneError.textContent = "Must be exactly 10 digits and start with 07.";
        isValid = false;

    } else {
        phoneError.textContent = "";
    }

    

    if (isValid === true) {
        alert("Successful Validation!");

        
        localStorage.setItem("Order", order.value);
        sessionStorage.setItem("name", username.value);

        
        document.write(`<h1>Welcome, ${username.value}</h1>`);
        document.write("Your Order: " + localStorage.getItem("Order") + "<br>");
        document.write("Your Username: " + sessionStorage.getItem("name"));
    }
}