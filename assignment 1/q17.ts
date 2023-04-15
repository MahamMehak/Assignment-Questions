// Start with the program from Exercise 16
let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];

// Print a message saying you can only invite two people for dinner
console.log("I'm sorry, I can only invite two people for dinner.");

// Remove guests from your list one at a time until only two names remain in your list
while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log("Sorry, " + removedGuest + ", I can't invite you to dinner.");
}

// Print a message to each of the two people still on your list, letting them know they're still invited
for (let i = 0; i < guests.length; i++) {
  console.log("You're still invited to dinner, " + guests[i] + "!");
}

// Remove the last two names from your list and print to confirm it is empty
guests.splice(0, guests.length);
console.log(guests); // Output: []