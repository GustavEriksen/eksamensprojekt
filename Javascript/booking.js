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
        allBookings = JSON.parse(localStorage.getItem("booking"))
    }
    function createBooking () {
        allBookings.push(new booking(name.value, email.value, telephone.value, check_in.value, check_out.value, adults.value, children.value, comments.value))
        localStorage.setItem("booking", JSON.stringify(allBookings))
        console.log(localStorage.getItem("booking"))
        console.log(localStorage);

    alert("Your reservation has been sent to Vivian. You will be notified when the reservation request has been accepted/denied. Here is the data you have given us: "
        + "\nName: " + name
        + "\nEmail: " + email
        + "\nTelephone: " + telephone
        + "\nCheck In Date: " + check_in
        + "\nCheck Out Date: " + check_out
        + "\nAdults: " + adults
        + "\nChildren: " + children
        + "\nComments: " + comments);

}

