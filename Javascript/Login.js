// Create submit for sign-up and log-in.
var submit = document.getElementById('submit');
var login = document.getElementById('login');
console.log(login)
var existingUser = JSON.parse(localStorage.getItem('User'));
var currentLogIn = []
//When clicking the Login button, retrieve input of username and password input-boxes
login.onclick = function  (e) {
    e.preventDefault()
console.log("Hi")
    var usernameInput = document.getElementById("usernameInput").value;
    var passwordInput = document.getElementById("passwordInput").value;
//console.log(usernameInput)
// Check if username and password match with already existing user. Redirect to main page
    for (let i = 0; i < existingUser.length; i++) {
       // console.log(usernameInput)
        //console.log(existingUser)
        if (usernameInput == existingUser[i].userName && passwordInput == existingUser[i].psw) {
            // Push username to current user LocalStorage
            currentLogIn.push({userName: usernameInput})
            console.log(currentLogIn)
            console.log(existingUser[i])
            document.location.href = "../HTML/home.html";
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentUser', IDString);
            return true
        }



    }
}