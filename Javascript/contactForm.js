var subject = document.getElementById("subject");
var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var telephone = document.getElementById("telephone");
var message = document.getElementById("message");

var allContactInfo
if (localStorage.getItem("contactInfo") == null) {
    allContactInfo = []

} else {
    allContactInfo = JSON.parse(localStorage.getItem("contactInfo"))
}


function createContactInfo () {
    allContactInfo.push(new contactInfo(subject.value, fullName.value, email.value, telephone.value, message.value))
    localStorage.setItem("contactInfo", JSON.stringify(allContactInfo));
    console.log(localStorage.getItem("contactInfo"));
    alert("Contact information sent");
    console.log(localStorage);
}

