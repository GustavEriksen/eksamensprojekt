// Reservationer

/*
Dette script er tilknyttet "Reservation", hvor Bruger
af systemet kan booke/bekræfte/foretage en reservation.
Hver reservation skal have et unikt Booking ID.

Methods:
- Reservér

*/

class reservation {
    constructor(reservationID, pris, KundeID, BookingID) {
        this.reservationID = reservationID;
        this.pris = pris;
        this.KundeID = KundeID;
        this.BookingID = BookingID;
    }
}