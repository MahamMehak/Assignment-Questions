"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usernames = ["Alice", "Bob", "admin", "Charlie", "David", "Eve"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
