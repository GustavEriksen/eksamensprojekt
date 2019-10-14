// Mine Reservationer

/*
Dette script er tilknyttet "Mine Reservationer", hvor Bruger
af systemet skal se sine bekræftede reservationer. Yderlgiere
skal brugeren kunne annullere en reservation mod et gebyr.

Methods:
- Annuller reservation

*/

class mine_reservationer {
    constructor(reservationID, reservation_dato, pris) {
        this.reservationID = reservationID;
        this.reservations_dato = reservation_dato;
        this.pris = pris;
    }
}