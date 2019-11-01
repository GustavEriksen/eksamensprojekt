// Bruger

/*
Dette script er tilknyttet nye brugere af systemet, som skal
kunne foretage/søge om en booking til systemet.

Methods:
- Reservér/book/booking
- Se "Mine Reservationer"
*/

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