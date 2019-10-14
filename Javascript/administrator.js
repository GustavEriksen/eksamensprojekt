// Adminstrator

/* Dette script er tilknyttet admin af systemet.
Admin kan sætte frie datoer og skal kunne se bookinger.

Methods:
- Sæt frie datoer
- Se "Mine bookinger"

 */


class Adminstator {
    constructor(name, email, telephone, birthdate, AdminID) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.birthdate = birthdate;
        this.AdminID = AdminID;
    }
}