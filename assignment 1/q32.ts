const current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];

const new_users: string[] = ['newuser1', 'user2', 'newuser2', 'user5', 'newuser3'];

for (let new_user of new_users) {
  const username_taken = current_users.some((current_user) =>
    current_user.toLowerCase() === new_user.toLowerCase()
  );

  if (username_taken) {
    console.log(`Sorry, the username ${new_user} is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations, the username ${new_user} is available!`);
  }
}