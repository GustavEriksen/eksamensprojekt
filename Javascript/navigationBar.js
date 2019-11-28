// NF: This function uses the HTML tag 'onclick' to open the login popup in the nav bar
function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}

// NF: This function uses the HTML tag 'onclick' to close the login popup in the nav bar
function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}

// NF: Script for closing the login popup outside of box
// var loginCloser = document.getElementById("popupForLogin");
// var loginWrapper = document.getElementById("loginWrapper");

//loginWrapper.style.height = '100vh';
//loginWrapper.style.width = '120%';

// NF: Open login
//document.querySelector('.login-button').addEventListener('click', () => {
    //loginCloser.classList.add('responsive');
    //loginWrapper.style.display = 'block';
    //loginWrapper.style.position = 'absolute';
    //loginWrapper.style.top = '0';
    //loginWrapper.style.zIndex = '102';
    //loginWrapper.style.backgroundColor = 'rgba(0,0,0, .5)';
    //loginWrapper.style.marginLeft = '-1%';
//});

// NF: Close login
//document.querySelector('#loginWrapper').addEventListener('click', () => {
   //loginCloser.classList.remove('responsive')
   //loginWrapper.style.display = 'none'
//});

// NF: Script for the hamburger bar
var hamburger = document.getElementById("hamburgerPopUp");
var hamWrapper = document.getElementById("hamBarWrapper");

hamWrapper.style.display = 'none';
hamWrapper.style.height = '100vh';
hamWrapper.style.width = '120%';

// NF: Open hamburger menu
document.querySelector('.icon').addEventListener('click', () => {
    hamburger.classList.add('responsive');
    hamWrapper.style.display = 'block';
    hamWrapper.style.position = 'absolute';
    hamWrapper.style.top = '0';
    hamWrapper.style.zIndex = '102';
    hamWrapper.style.backgroundColor = 'rgba(0,0,0, .5)';
    hamWrapper.style.marginLeft = '-1%';
});

// NF: Close hamburger menu
document.querySelector('#hamBarWrapper').addEventListener('click', () => {
    hamburger.classList.remove('responsive');
    hamWrapper.style.display = 'none';
});


