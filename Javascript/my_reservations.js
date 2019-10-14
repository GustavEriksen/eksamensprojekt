// Mine Reservationer - My Reservations

/*
Dette script er tilknyttet "Mine Reservationer", hvor Bruger
af systemet skal se sine bekræftede reservationer. Yderlgiere
skal brugeren kunne annullere en reservation mod et gebyr.

Methods:
- Annuller reservation

*/

class my_reservations {
    constructor(reservationID, reservation_date, price) {
        this.reservationID = reservationID;
        this.reservations_date = reservation_date;
        this.price = price;
    }
}