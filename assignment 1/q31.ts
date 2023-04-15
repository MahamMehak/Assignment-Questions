let users: string[] = [];

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let user of users) {
    console.log(`Hello, ${user}!`);
  }
}

users = []; // empty the array

if (users.length === 0) {
  console.log("We need to find some users!");
}