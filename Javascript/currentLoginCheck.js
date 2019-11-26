// Curent login check (console.log)
var currentLogin
if(localStorage.getItem("currentUser") == null){
    console.log("There is currently no user registered as logged-in");
} else {
    currentLogin = JSON.parse(localStorage.getItem("currentUser"))
    console.log("Currently logged-in as:")
    console.log(currentLogin);
}