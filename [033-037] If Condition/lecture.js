let theName = "Ahmed";
let theGender = "Male";
let theAge = 30;

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("UnKnown");

//Nullish Coalescing Operator And Logical Or
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));

let price = 0;
console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);