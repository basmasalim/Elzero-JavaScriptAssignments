let a = "Elzero Web School";

// Include This Methods In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); //Zero

//8 H
console.log(a.slice(-4,-3).toUpperCase().repeat(8)); //HHHHHHHH

//Return Array
console.log(a.split(" ",1)); //[Elzero]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,10)); //Elzreo Web

// Solution Must Be Dynamic And String May Change
console.log(a.slice(0,2).toLowerCase() + a.slice(2,-1).toUpperCase() + a.slice(-1).toLowerCase()); //elZERO WEB SCHOOl