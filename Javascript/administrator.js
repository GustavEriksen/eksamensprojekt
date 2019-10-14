// Adminstrator

/* Dette script er tilknyttet admin af systemet.
Admin kan sætte frie datoer og skal kunne se bookinger.

Methods:
- Sæt frie datoer
- Se "Mine bookinger"

 */


class adminstator {
    constructor(name, email, telephone, birthdate, adminID) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.birthdate = birthdate;
        this.adminID = adminID;
    }
}