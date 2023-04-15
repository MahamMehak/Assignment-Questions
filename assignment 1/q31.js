"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let user of users) {
        console.log(`Hello, ${user}!`);
    }
}
users = []; // empty the array
if (users.length === 0) {
    console.log("We need to find some users!");
}
