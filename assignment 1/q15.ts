let guestList: string[] = ["Albert Einstein", "Oprah Winfrey", "Nelson Mandela"];
console.log(`Original Guest List: ${guestList}`);

const guestWhoCantMakeIt: string = "Albert Einstein";
const guestWhoWillReplace: string = "Marie Curie";

const indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
  guestList[indexOfGuestWhoCantMakeIt] = guestWhoWillReplace;
  console.log(`${guestWhoCantMakeIt} can't make it.`);
}

console.log(`Revised Guest List: ${guestList}`);

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner at my place. Please let me know if you can make it.`);
}