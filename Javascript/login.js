// SAR: Create submit for sign-up and log-in.
var submit = document.getElementById('submit');
var login = document.getElementById('login');
console.log(login); // check to see if login works and what it pulls

// SAR: Creating a variable "existingUser" which pulls the string information from localStorage (server) and sets it
// to an object.
var existingUser = JSON.parse(localStorage.getItem('User'));

// SAR: Creating a variable "currentLogin" which we push the login info to as a string later in the script.
var currentLogIn = [];
// SAR: When clicking the Login button, retrieve input of username and password input-boxes

// LS: The above code could be organized better and more visually appealing. Good idea is to start off with alle the variables. Otherwise all code makes sense with reliable and good description.

login.onclick = function  (e) {
    e.preventDefault();// SAR: Making it so that page doesnt refresh when pressing login
console.log("Hi") ;// SAR: check to see if script works to this point
    var usernameInput = document.getElementById("usernameInput").value;
    var passwordInput = document.getElementById("passwordInput").value;

    //console.log(usernameInput)        //LS: why is this commented out?

// SAR: Check if username and password match with already existing user. Redirect to main page if it returns true
    for (let i = 0; i < existingUser.length; i++) { // Runs through the localStorage via the exisitngUser variable to see if there is a match
       // console.log(usernameInput)
        //console.log(existingUser)
        if (usernameInput == existingUser[i].userName && passwordInput == existingUser[i].psw) {
            // SAR: If username and psw matches, Push username to current user in LocalStorage and redirect to home page.      //LS: Good description.
            currentLogIn.push({userName: usernameInput});
            console.log(currentLogIn);
            console.log(existingUser[i]);
            document.location.href = "../HTML/home.html";
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentUser', IDString); // SAR: Sets the current user
            return true                                        //LS: comment why you use "return tru" here. Otherwise, it's good with the console logs. Makes it easier to see, in console, if the script is actually running on the website.
        }
    }
};