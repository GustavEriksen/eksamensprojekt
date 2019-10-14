// Reservationer - Reservations

/*
Dette script er tilknyttet "Reservation", hvor Bruger
af systemet kan booke/bekræfte/foretage en reservation.
Hver reservation skal have et unikt Booking ID.

Methods:
- Reservér

*/

class reservation {
    constructor(reservationID, price, userID, bookingID) {
        this.reservationID = reservationID;
        this.price = price;
        this.userID = userID;
        this.bookingID = bookingID;
    }
}