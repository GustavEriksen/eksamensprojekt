// Bruger

/*
Dette script er tilknyttet nye brugere af systemet, som skal
kunne foretage/søge om en booking til systemet.

Methods:
- Reservér/book/booking
- Se "Mine Reservationer"
*/

class user {
    constructor(name, email, telephone, birthdate, userID) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.birthdate = birthdate;
        this.userID = userID;
    }
}