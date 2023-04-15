// Define an array of places to visit
let placesToVisit: string[] = ["Tokyo", "New York", "Bali", "Paris", "Sydney"];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:");
console.log([placesToVisit].sort());

// Print the array again to show it's still in its original order
console.log("Still in original order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Print the array again to show it's still in its original order
console.log("Still in original order:");
console.log(placesToVisit);

// Reverse the order of the list and print it
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

// Reverse the order of the list again and print it
placesToVisit.reverse();
console.log("Back to original order:");
console.log(placesToVisit);

// Sort the list in alphabetical order and print it
placesToVisit.sort();
console.log("Sorted in alphabetical order:");
console.log(placesToVisit);

// Sort the list in reverse alphabetical order and print it
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit);