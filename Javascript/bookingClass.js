// Here we create a class for the data, that we need to retrieve from request booking.
class booking {
    constructor(fullname, email, telephone, check_in, check_out, adults, children, comments) {
        this.fullname = fullname;
        this.email = email;
        this.telephone = telephone;
        this.check_in = check_in;
        this.check_out = check_out;
        this.adults = adults;
        this.children = children;
        this.comments = comments;
    }
}
