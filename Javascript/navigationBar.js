// This function uses the HTML tag 'onclick' to open the login popup in the nav bar
function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}

// This function uses the HTML tag 'onclick' to close the login popup in the nav bar
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
// Script for the hamburger bar
var hamburger = document.getElementById("hamburgerPopUp");
var navWrapper = document.getElementById("navBarWrapper");

navWrapper.style.display = 'none'
navWrapper.style.height = '100vh'
navWrapper.style.width = '120%'


// open menu
document.querySelector('.icon').addEventListener('click', () => {
    hamburger.classList.add('responsive')
    navWrapper.style.display = 'block'
    navWrapper.style.position = 'absolute'
    navWrapper.style.top = '0'
    navWrapper.style.zIndex = '102'
    navWrapper.style.backgroundColor = 'rgba(0,0,0, .5)'
    navWrapper.style.marginLeft = '-1%'
})

// close menu
document.querySelector('#navBarWrapper').addEventListener('click', () => {
    hamburger.classList.remove('responsive')
    navWrapper.style.display = 'none'
})