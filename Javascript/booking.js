if (JSON.parse(localStorage.getItem("currentUser")) == null){
    alert("You need to be logged in to make a booking request");
    document.location.href = "home.html";
}
