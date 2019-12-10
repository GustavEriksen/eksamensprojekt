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

// Function to click on a thumbnail image and show it in the modal.
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This toggles the correct slides.
function showSlides(n) {
    var i;

    // Defining the variables with the values from the HTML classes and Id which will be used within the script.
    var slides = document.getElementsByClassName("gallerySlides");
    var smallSlides = document.getElementsByClassName("modalSmall");
    var captionText = document.getElementById("caption");

    // If slide 'n' is greater than the total number of slides
    if (n > slides.length) {
        slideIndex = 1
    }

    // If slide 'n' is less than total number of slides
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";
    }

    for (i = 0; i < smallSlides.length; i++) {
        smallSlides[i].className = smallSlides[i].className.replace(" active", "");
    }

    // style.display shows the image.
    slides[slideIndex-1].style.display = "block";

    <!--If the thumbnail image in the gallery modal is small, the CSS display changes to active
    and it will no longer have the opacity effect.-->
    smallSlides[slideIndex-1].className += " active";

    // Shows the caption text that belongs to the chosen image.
    captionText.innerHTML = smallSlides[slideIndex-1].alt;
}