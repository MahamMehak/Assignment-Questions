"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList1 = ["Marie Curie", "Oprah Winfrey", "Nelson Mandela"];
console.log(`Original Guest List: ${guestList1}`);
console.log("Good news! I found a bigger dinner table.");
const newGuest1 = "Ada Lovelace";
const newGuest2 = "Mahatma Gandhi";
const newGuest3 = "Steve Jobs";
guestList1.unshift(newGuest1); // Add to beginning
guestList1.splice(Math.ceil(guestList1.length / 2), 0, newGuest2); // Add to middle
guestList1.push(newGuest3); // Add to end
console.log(`New Guest List: ${guestList1}`);
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are cordially invited to dinner at my place. Please let me know if you can make it.`);
}
