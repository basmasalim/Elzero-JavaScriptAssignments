//Assignment-01
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice("",1).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(3,4).toLowerCase()); // e
console.log(userName.substring(userName.length - 3,userName.length - 2)); // e
console.log(userName.substr(3,1)); // eee

//----------------------------------------------------------------------------
//Assignment-02
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True