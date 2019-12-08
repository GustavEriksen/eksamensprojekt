// The gallery JS is made with inspiration from: https://www.w3schools.com/howto/howto_js_lightbox.asp

// The function 'openModal' will open the div 'galleryModal' when clicking on a picture.
function openModal() {
    document.getElementById("galleryModal").style.display = "block";
}

// The function 'closeModal' will close the modal when clicking the X
function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// This is the function for the Prev/Next buttons in the Modal
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to click and show a photo in the gallery
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This is the loop for the gallery page.
function showSlides(n) {

    // Defining the variables with the values from the HTML classes and Id which will be used within the script.
    var i;
    var slides = document.getElementsByClassName("gallerySlides");
    var smallSlides = document.getElementsByClassName("modalSmall");
    var captionText = document.getElementById("caption");

    // Makes it possible to go from image 7 -> 8 -> 1.
    if (n > slides.length) {
        slideIndex = 1
    }

    // Makes it possible to go from image 2 -> 1 -> 8.
    if (n < 1) {
        slideIndex = slides.length
    }

    // Makes the modal only show one picture at a time.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Gives the same small image in the modal (smallSlides/modalSmall), a highlight effect, if it is the same as the big image in the modal (gallerySlides)
    for (i = 0; i < smallSlides.length; i++) {
        smallSlides[i].className = smallSlides[i].className.replace(" active", "");
    }

    // style.display shows the picture.
    slides[slideIndex-1].style.display = "block";

    // Gives the highlight effect, if the 'slides' is active, otherwise it has a shadow.
    smallSlides[slideIndex-1].className += " active";

    // Shows the caption text that belongs to the picture.
    captionText.innerHTML = smallSlides[slideIndex-1].alt;
}