let personName: string = "john doe";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b(\w)/g, s => s.toUpperCase()));