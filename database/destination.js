const sqlite3 = require("better-sqlite3");
const db = sqlite3("destination.sqlite");

export function getAllDestinations() {
    const destinations = db.prepare("SELECT * FROM destinations").all();
    // console.log(destinations);
    return destinations;
}

export function getDestinationById(id) {
    const destination = db.prepare("SELECT * FROM destinations WHERE id = ?").get(id);
    console.log(destination);
    return destination;
}

export function addContacts(param) {
    console.log(param);
    return "yes";
}