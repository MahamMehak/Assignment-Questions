"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
let magicians = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel"];
magicians = make_great(magicians);
show_magicians(magicians);
