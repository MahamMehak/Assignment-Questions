"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderSandwich(...items) {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}
// Example usage
orderSandwich("turkey", "lettuce", "tomato");
orderSandwich("peanut butter", "jelly");
orderSandwich("bacon", "egg", "cheese", "mayo");
