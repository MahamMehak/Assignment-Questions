"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "L", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it has the message "${message}" printed on it.`);
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt("M");
// Any size shirt with a different message
make_shirt("S", "TypeScript is awesome!");
