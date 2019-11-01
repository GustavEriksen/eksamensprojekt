// Create submit for sign-up and log-in.
var submit = document.getElementById('submit');
var login = document.getElementById('login');
var existingUser = JSON.parse(localStorage.getItem('User'));

//When clicking the Login button, retrieve input of username and password input-boxes
login.onclick = function  () {

    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

// Check if username and password match with already existing user. Redirect to main page
    for (let i = 0; i < existingUser[i]; i++) {
        if (usernameInput == existingUser && passwordInput == existingUser[i].password) {
            // Push username to current user LocalStorage
            currentLogIn.push({userName: usernameInput})
            document.location.href = "home.html";
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentUser', IDString);
            return true
        }
    }
}