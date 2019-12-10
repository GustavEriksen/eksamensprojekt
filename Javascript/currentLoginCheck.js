// SAR: Current login check (console.log)
var currentLogin;
if(localStorage.getItem("currentUser") == null){ // LS: Explain what this does and where currentUser is taken from
    console.log("There is currently no user registered as logged-in");
} else {
    currentLogin = JSON.parse(localStorage.getItem("currentUser"))
    console.log("Currently logged-in as:")
    console.log(currentLogin);
} // LS: Good code. Nice, short and understandable code.


