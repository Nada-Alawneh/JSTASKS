// getElementById() 
let submitBtn = document.getElementById("submitBtn");
let resultDisplay = document.getElementById("result");

//  querySelector()  
let orderSelect = document.querySelector("#foodOrder");

//  getElementsByClassName() 
let nameInputs = document.getElementsByClassName("name-input");

//  getElementsByTagName()
let labels = document.getElementsByTagName("label");


// Functions
function displayOrder() {
    
    let name = nameInputs[0].value;
    let order = orderSelect.value;

    if (name === "") {
        resultDisplay.style.color = "red";
        resultDisplay.textContent = "Please enter your name!";
        return;
    }

    //  Display 
    resultDisplay.style.color = "#28a745";
    resultDisplay.textContent = `Hello ${name}! Your order is ${order}.`;
}

// Events: onmouseover & onmouseout for the button color change
function changeColor() {
    submitBtn.style.backgroundColor = "#0056b3"; 
}

function resetColor() {
    submitBtn.style.backgroundColor = "#007bff"; 
}


