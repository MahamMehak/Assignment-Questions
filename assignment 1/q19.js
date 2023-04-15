"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest = ["Alice", "Bob", "Charlie"];
console.log(`You are inviting ${guest.length} people to dinner.`);
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, please come to dinner.`);
}
