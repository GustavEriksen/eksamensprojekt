// Bruger

/*
Dette script er tilknyttet nye brugere af systemet, som skal
kunne foretage/søge om en booking til systemet.

Methods:
- Reservér/book/booking
- Se "Mine Reservationer"
*/

class Bruger {
    constructor(name, email, telephone, birthdate, KundeID) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.birthdate = birthdate;
        this.KundeID = KundeID;
    }
}