//Assignment-02
//Created A New Element Use JS only
document.write("<h1>Elzero</h1>");

// Styling It Using Js Only
document.querySelector("h1").style.color = "Blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
//----------------------------------------------------------------------------
//Assignment-03
console.log("%cElzero %cWeb %cSchool", "color:red; font-size: 40px", "color:green; font-size: 40px; font-weight:Bold" , "color:white; font-size: 40px; background-color:blue")
//----------------------------------------------------------------------------
//Assignment-04
console.group("Group 1");
console.log("Message One");
console.log("Message Two");

console.group("Child Group");
console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");

console.groupEnd(); //Back to level 2
console.groupEnd(); //Back to level 1
console.groupEnd(); //Back to the outer level

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
//----------------------------------------------------------------------------
//Assignment-05
console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);
//----------------------------------------------------------------------------
//Assignment-06
/* first method */
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

/* second method */
// console.log('Iam In Console')
// document.write('Iam In Page')