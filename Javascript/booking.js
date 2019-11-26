// Check login
if (JSON.parse(localStorage.getItem("currentUser")) == null){
    alert("You need to be logged in to make a booking request");
    document.location.href = "home.html";
    var x = document.getElementById("mydiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Here we create a class for the data, that we need to retrieve from request booking.
class booking {
    constructor(fullname, email, telephone, check_in, check_out, adults, children, comments) {
        this.fullname = fullname;
        this.email = email;
        this.telephone = telephone;
        this.check_in = check_in;
        this.check_out = check_out;
        this.adults = adults;
        this.children = children;
        this.comments = comments;
    }
}

// Here we take the input data and assign them to their respective id values
    var fullname = document.getElementById("name");
    var email = document.getElementById("email");
    var telephone = document.getElementById("telephone");
    var check_in = document.getElementById("check-in");
    var check_out = document.getElementById("check-out");
    var adults = document.getElementById("adults");
    var children = document.getElementById("children");
    var comments = document.getElementById("comments");

    // We now create a function which creates a user array of the input-data.
    var allBookings
    if(localStorage.getItem("booking") == null){
        allBookings = []
    } else {
        allBookings = JSON.parse(localStorage.getItem("booking"))}

    // here we push all the new data into an array called booking - this is displayed under "application" when you inspect in browser.
    function createBooking () {
        allBookings.push(new booking(name.value, email.value, telephone.value, check_in.value, check_out.value, adults.value, children.value, comments.value))
        localStorage.setItem("booking", JSON.stringify(allBookings))
        console.log(localStorage.getItem("booking"))
        console.log(localStorage);

        // Here the data is shown in console log.
    alert("Your reservation has been sent to Vivian. You will be notified when the reservation request has been accepted/denied.");
    }
