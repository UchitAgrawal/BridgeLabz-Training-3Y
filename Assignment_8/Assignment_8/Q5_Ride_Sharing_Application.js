// Q5 - Ride-Sharing Application

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance must be provided.");
        }

        if (typeof this.distance !== "number" || !Number.isFinite(this.distance) || this.distance < 0) {
            throw new Error("Trip distance must be a valid non-negative number.");
        }

        const ratePerKm = 12;
        const baseFare = 30;
        return baseFare + (this.distance * ratePerKm);
    }
}

const driver = new Driver("Rahul", 4.8, "Sedan", "UP85 AB 1234");
console.log(`Driver: ${driver.name}, Rating: ${driver.rating}, Vehicle: ${driver.vehicle} (${driver.vehicleNumber})`);

const trips = [
    new Trip("Mathura", "Vrindavan", 15),
    new Trip("Mathura", "Agra", -5),
    new Trip("Mathura", "Delhi", undefined)
];

trips.forEach(trip => {
    try {
        console.log(
            `Fare from ${trip.fromLocation} to ${trip.toLocation}: Rs. ${trip.calculateFare()}`
        );
    } catch (error) {
        console.log(`Unable to calculate fare: ${error.message}`);
    }
});
