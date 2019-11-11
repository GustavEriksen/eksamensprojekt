<!-- Script for the hamburger bar -->
function openHamburger() {
    var hamburger = document.getElementById("hamburgerPopUp");
    if (hamburger.className === "hamburgerBar") {
        hamburger.className += " responsive";
    } else {
        hamburger.className = "hamburgerBar";
    }
}