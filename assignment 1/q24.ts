// Tests for equality and inequality with strings
let myName = 'John';
let message = 'Hello';

console.log("Is myName equal to 'John'? I predict True.");
console.log(myName === 'John');

console.log("Is myName not equal to 'john'? I predict True.");
console.log(myName !== 'john');

console.log("Is message equal to 'hello'? I predict False.");
console.log(message === 'hello');

console.log("Is message not equal to 'Hello World'? I predict True.");
console.log(message !== 'Hello World');

// Tests using the lower case function
let word1 = 'Hello';
let word2 = 'HELLO';

console.log("Do word1 and word2 have the same lower case letters? I predict True.");
console.log(word1.toLowerCase() === word2.toLowerCase());

console.log("Is word1 lower case equal to 'hello'? I predict True.");
console.log(word1.toLowerCase() === 'hello');

console.log("Is word2 lower case not equal to 'hello'? I predict True.");
console.log(word2.toLowerCase() !== 'hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a = 5;
let b = 10;

console.log("Is a less than b? I predict True.");
console.log(a < b);

console.log("Is a greater than or equal to 5? I predict True.");
console.log(a >= 5);

console.log("Is b not equal to 5? I predict True.");
console.log(b !== 5);

console.log("Is a less than or equal to 3? I predict False.");
console.log(a <= 3);

console.log("Is b greater than 20? I predict False.");
console.log(b > 20);

// Tests using "and" and "or" operators
let x = 5;
let y = 10;
let z = 15;

console.log("Is x less than y and y less than z? I predict True.");
console.log(x < y && y < z);

console.log("Is x greater than 5 or y less than 5? I predict False.");
console.log(x > 5 || y < 5);

console.log("Is z less than or equal to y and x not equal to 5? I predict False.");
console.log(z <= y && x !== 5);

// Test whether an item is in an array
let colors = ['red', 'green', 'blue'];

console.log("Is 'red' in the colors array? I predict True.");
console.log(colors.includes('red'));

console.log("Is 'yellow' in the colors array? I predict False.");
console.log(colors.includes('yellow'));

// Test whether an item is not in an array
let animals = ['cat', 'dog', 'bird'];

console.log("Is 'fish' not in the animals array? I predict True.");
console.log(!animals.includes('fish'));

console.log("Is 'dog' not in the animals array? I predict False.");
console.log(!animals.includes('dog'));