let theName = " Basma ";
let theList = [1 , 2, 3, 4];

console.log(theName);
console.log(theName[0]);
console.log(theName[1]);

console.log(theName.charAt(1));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(3).toUpperCase());
/////////////////////////////////////////////////////

let a = "Elzero Web School";

// indexOf(Value [Mand], Start [Opt] 0)
console.log(a.indexOf("Web"));
console.log(a.indexOf("Web",8));
console.log(a.indexOf("o"));//5

console.log(a.lastIndexOf("o"));//15

console.log(a.slice(2,6)); //zero
console.log(a.slice(-6)); //School
console.log(a.slice(-10,-7)); //Web

console.log(a.repeat(2));

console.log(a.split()); //Array
console.log(a.split(" ")); // ['Elzero', 'Web', 'School']
console.log(a.split("",6)); // ['E', 'l', 'z', 'e', 'r', 'o']

console.log(a.substring(7)); //Web School
console.log(a.substring(2,6)); //zero
console.log(a.substring(6,2)); //zero
console.log(a.substring(-10)); //Elzero Web School === Start in 0 
console.log(a.substring(a.length - 1)); //l
console.log(a.substring(a.length - 5, a.length - 4)); //c
console.log(a.substring(a.length - 5, a.length - 3)); //ch

console.log(a.substr(0)); //Elzero Web School 
console.log(a.substr(0,6)); //Elzero
console.log(a.substr(17)); //  
console.log(a.substr(-10)); //Web School
console.log(a.substr(-5,2)); //ch

console.log(a.includes("Web")); //true
console.log(a.includes("Web",7)); //true
console.log(a.includes("Web",8)); //false

console.log(a.startsWith("E"));//true
console.log(a.startsWith("E",7));//false
console.log(a.startsWith("W",7));//true

console.log(a.endsWith("o",6)); //true





