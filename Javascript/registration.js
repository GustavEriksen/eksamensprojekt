// In this script we want to create a security measure to make sure, that the user can see if their password meets the requirements set by the input-field

var password = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var length = document.getElementById("length");

// Script to show a message box when password field is clicked
password.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// Script to hide the message box when the user clicks outside of the password field
password.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// Script that starts when the user starts to write in the password field
password.onkeyup = function () {
    // Check to see if there are lowercase letters
    var lowerCaseLetters = /[a-z]/;
    if(password.value.match(lowerCaseLetters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Check to see if there are capital letters
    var upperCaseLetters = /[A-Z]/;
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Check to see if there are numbers
    var numbers = /[0-9]/;
    if (password.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }


    // Check to see if length is greater than 8
    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// Here we take the input data and assign them to their respective id values.
var fullname = document.getElementById("fullname");
var birthday= document.getElementById("birthday");
var email = document.getElementById("email");
var psw = document.getElementById("psw");
var userName = document.getElementById("userName");
var teleNmb= document.getElementById("teleNmb");

// We now create a variable which creates a user array of the input-data.
var allUsers
if(localStorage.getItem("User") == null){
    allUsers = []
} else {
    allUsers = JSON.parse(localStorage.getItem("User"))
}


function createUser () {
    allUsers.push(new User(fullname.value, email.value, teleNmb.value, birthday.value, userName.value, psw.value));
    localStorage.setItem("User", JSON.stringify(allUsers));
    console.log(localStorage.getItem("User"));

    /* This was the old code which worked for one user but was overwritten if multiple users were created.
    localStorage.setItem("fullname", fullname.value);
    localStorage.setItem("birthday", birthday.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("psw", psw.value);
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("teleNmb", teleNmb.value);*/
    alert("New user created");
    console.log(localStorage);
}