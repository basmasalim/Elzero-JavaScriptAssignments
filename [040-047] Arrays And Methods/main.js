//Assignment-01
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
let method1 = myFriends.slice(false, num);
console.log(method1); // ["Ahmed", "Elham", "Osama"];

// Method 2
let method2 = myFriends.splice(false, num);
console.log(method2); // ["Ahmed", "Elham", "Osama"];

//----------------------------------------------------------------------------
//Assignment-02
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(true, true + true)); // ["Eman", "Osama"]

//----------------------------------------------------------------------------
//Assignment-03
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//----------------------------------------------------------------------------
//Assignment-04
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(true + true, words[2][0].length).toUpperCase()); // ZERO

//----------------------------------------------------------------------------
//Assignment-05
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
//SOL1
if (haystack.includes(needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}
//SOL2
if (haystack.indexOf(needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}
//SOL3
if (haystack.slice(1, 2).includes(needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}

//----------------------------------------------------------------------------
//Assignment-06
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = arr1
  .slice(true + true, arr1.length)
  .concat(arr2.slice(true + true, arr2.length))
  .sort()
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy
