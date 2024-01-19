/*
    Function Arrow Challenges
*/

let names = (...name) => {
  return `String [${name.join("],[")}] => Done!`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim", "Hazem"));

/* ============================================= */

let myNumber = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + one + two + nums.length * one;

console.log(calc(10, myNumber[1], myNumber[0])); //80
