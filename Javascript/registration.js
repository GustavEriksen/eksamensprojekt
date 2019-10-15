var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("number");
var length = document.getElementById("length");

// Script to show a message box when password field is clicked
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// Script to hide the message box when the user clicks outside of the password field
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// Script that starts when the user starts to write in the password field
myInput.onkeyup = function () {
    // Check to see if there are lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Check to see if there are capital letters
    var upperCaseLetters = /[A-Å]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Check to see if there are numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }


    // Check to see if length is greater than 8
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
