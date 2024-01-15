let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = true;

for (let i =+ true; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
    // Here We Selected The inner Index By [+false]=[0] To Get The First Index Of The Element To Start Fillter.
  }
  console.log(`"${counter++} => ${friends[i]}"`);
}


