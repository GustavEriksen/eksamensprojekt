// SAR: This is our User class. It contains the information required for making an account which will grant access to
// making future bookings.
class User {
    constructor(fullname, email, telephone, birthday, userName, password) {
        this.fullname = fullname;
        this.email = email;
        this.teleNmb = telephone;
        this.birthday = birthday;
        this.userName = userName;
        this.psw = password;
    }
}