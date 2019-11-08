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