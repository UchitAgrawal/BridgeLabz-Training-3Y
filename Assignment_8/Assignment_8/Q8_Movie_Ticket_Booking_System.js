// Q8 - Movie Ticket Booking System (Inheritance + Prototype Chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    console.log(
        `Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket Price: Rs. ${this.price}`
    );
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const ticket1 = new OnlineTicket("Interstellar", "A10", 250, 30);
const ticket2 = new OnlineTicket("Inception", "B05", 220, 25);

[ticket1, ticket2].forEach(ticket => {
    ticket.printTicket(); // Inherited through the prototype chain.
    console.log(`Convenience Fee: Rs. ${ticket.convenienceFee}`);
    console.log(`Total Amount: Rs. ${ticket.getTotalAmount()}`);
    console.log("------------------------------");
});

console.log(
    "Prototype check:",
    Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype
); // true
