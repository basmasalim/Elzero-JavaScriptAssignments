/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amaged",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

document.write(`<div>We Have X Admins </div>`);

let admins = [];
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  admins.push(myAdmins[i]);
}
document.write(`<div>We Have ${admins.length} Admins </div>`);

mainLoop: for (let j = 0; j < admins.length; j++) {
  document.write(`<hr>`);
  document.write(`<p>The Admin For Team ${j + 1} is ${admins[j]}</p>`);
  document.write(`<h3>Team Member:</h3>`);

  let counter = 1;
  nestedLoop: for (let k = 0; k < myEmployees.length; k++) {
    if (admins[j][0] === myEmployees[k][0]) {
      document.write(`<div>- ${counter++} ${myEmployees[k]}</div>`);
      document.write(`<br>`);
    }
  }
}
