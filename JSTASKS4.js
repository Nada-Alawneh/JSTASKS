
let textBox = document.getElementById("textBox");

// 1. changeFontFamily()
function changeFontFamily() {
    let fontFamilySelect = document.getElementById("fontFamily");
    textBox.style.fontFamily = fontFamilySelect.value;
}

// 2. changeFontSize()
function changeFontSize() {
    let fontSizeSelect = document.getElementById("fontSize");
    textBox.style.fontSize = fontSizeSelect.value;
}

// 3. (Italic)
function toggleItalic() {
    let italicCheck = document.getElementById("italicCheck");
    if (italicCheck.checked) {
        textBox.style.fontStyle = "italic";
    } else {
        textBox.style.fontStyle = "normal";
    }
}

// 4.(Bold)
function toggleBold() {
    let boldCheck = document.getElementById("boldCheck");
    if (boldCheck.checked) {
        textBox.style.fontWeight = "bold";
    } else {
        textBox.style.fontWeight = "normal";
    }
}


// 5. (Underline)
function toggleUnderline() {
    let underlineCheck = document.getElementById("underlineCheck");
    if (underlineCheck.checked) {
        textBox.style.textDecoration = "underline";
    } else {
        textBox.style.textDecoration = "none";
    }
}



// image ex :
let myImage = document.getElementById("myImage");

function makeCircle() {
    myImage.style.borderRadius = "50%"; 
}

function makeSquare() {
    myImage.style.borderRadius = "0px"; 
}