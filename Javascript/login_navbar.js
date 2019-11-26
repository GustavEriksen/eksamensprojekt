// This function retrives the HTML tag 'onclick' to open the login popup in the nav bar
function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}

// This function retrives the HTML tag 'onclick' to close the login popup in the nav bar
function closeLoginForm() {
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

<!-- Script for the hamburger bar -->
function openHamburger() {
    var hamburger = document.getElementById("hamburgerPopUp");
    if (hamburger.className === "hamburgerBar") {
        hamburger.className += " responsive";
    } else {
        hamburger.className = "hamburgerBar";
    }
}