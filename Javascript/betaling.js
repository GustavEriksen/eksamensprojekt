// Betaling - Payment

/* Scriptet har til formål, at bruge brugerens ID for så at lave
 et unikt Booking ID, der tilknyttes til bookingen/betalingen.

Methods:
- Betal
- Betaling bekræftet

 */

class Betaling {
    constructor(KundeID, BookingID, Kort_Information) {
        this.KundeID = KundeID;
        this.BookingID = BookingID;
        this.Kort_Information = Kort_Information;
    }
}