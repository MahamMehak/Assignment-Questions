// function describe_city(city: string="pk", country: string = "USA"): void {
//     console.log(`${city} is in ${country}.`);
//   }

function describe_city(city: string, country = 'United States'): void {
  console.log(`${city} is in ${country}.`);
}

// Example usage:
describe_city('New York'); // Output: New York is in United States.
describe_city('London', 'United Kingdom'); // Output: London is in United Kingdom.
describe_city('Lahore', 'Pakistan'); // Output: Lahore is in Pakistan.