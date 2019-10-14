// Betaling - Payment

/* Scriptet har til formål, at bruge brugerens ID for så at lave
 et unikt Booking ID, der tilknyttes til bookingen/betalingen.

Methods:
- Betal
- Betaling bekræftet

 */

class payment {
    constructor(userID, bookingID, card_information) {
        this.userID = userID;
        this.bookingID = bookingID;
        this.card_information = card_information;
    }
}