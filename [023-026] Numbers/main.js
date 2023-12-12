//Assignment-01
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(100000.000); // 100000
console.log(10*10*10*10*10); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(10**5); // 100000
console.log(Math.floor(100000.2)); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.trunc(100000.6)); // 100000
console.log(Math.round(100000.2)); // 100000
console.log(parseInt(100000)); // 100000

//----------------------------------------------------------------------------
//Assignment-02
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//----------------------------------------------------------------------------
//Assignment-03
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 
//----------------------------------------------------------------------------
//Assignment-04
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//----------------------------------------------------------------------------
//Assignment-05
let num = 10;

console.log(); // 2
console.log(Number.isInteger(num) + Number.isInteger(num)); //true

//----------------------------------------------------------------------------
//Assignment-06
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(parseInt(flt)); // 10

//----------------------------------------------------------------------------
//Assignment-07
console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4