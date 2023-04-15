const names: string[] = ["Alice", "Bob", "Charlie", "David"];
const greetingMessage: string = "Hello, ";

for (let i = 0; i < names.length; i++) {
  console.log(`${greetingMessage}${names[i]}!`);
}