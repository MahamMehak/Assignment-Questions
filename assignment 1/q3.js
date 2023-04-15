"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "john doe";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b(\w)/g, s => s.toUpperCase()));
