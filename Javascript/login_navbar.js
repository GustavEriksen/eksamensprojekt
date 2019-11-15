// This function retrives the HTML tag 'onclick' to open the login popup in the nav bar
function openForm() {
    document.getElementById("loginForm").style.display = "block";
}

// This function retrives the HTML tag 'onclick' to close the login popup in the nav bar
function closeForm() {
    document.getElementById("loginForm").style.display = "none";
}

// This function will make the login popup close when clicking outside of the form
// Firstly, we define a variable to retrieve the div of the login form
var closeOutside = document.getElementById('id01')

// Then we use 'event' with the target property to get the variable above and make it disappear
window.onclick = function(event) {
    if (event.target == closeOutside) {
        closeOutside.style.display = "none";
    }
}
// The function above is currently not working
