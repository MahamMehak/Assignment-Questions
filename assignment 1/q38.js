"use strict";
// function describe_city(city: string="pk", country: string = "USA"): void {
//     console.log(`${city} is in ${country}.`);
//   }
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = 'United States') {
    console.log(`${city} is in ${country}.`);
}
// Example usage:
describe_city('New York'); // Output: New York is in United States.
describe_city('London', 'United Kingdom'); // Output: London is in United Kingdom.
describe_city('Lahore', 'Pakistan'); // Output: Lahore is in Pakistan.
