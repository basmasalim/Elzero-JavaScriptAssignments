let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

let myFriends = [];
while (index < friends.length - true) {
  index++;

  if (!(typeof friends[index] === "number" || friends[index][counter] === "A")) {
    myFriends.push(friends[index]);
  }
}
index = 0;

while (index < myFriends.length) {
  document.write(`"${counter++ + true} => ${myFriends[index]}"<br>`);
  index++;
}

// !===================== Sol2 ========================

let friendsTwo = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indexTwo = 0;
let counterTwo = 0;

while (indexTwo < friendsTwo.length - 1) {
  indexTwo++;
  if (friendsTwo[indexTwo][true - true] === "A") {
    continue;
  } else if (typeof friendsTwo[indexTwo] === "number") {
    continue;
  }
  console.log(`${counterTwo++ + true} => ${friendsTwo[indexTwo]}`);
}
