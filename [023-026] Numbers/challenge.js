let a = 1_00;

let b = 2_00.5;
let c = 1e2;

let d = 2.4;

// Find Smallest Number in All Variables And Return Integer
console.log(Math.min(a,b,c,d));

// Use Variable a + d One Time To Get The Needed Output 
console.log(Math.pow(a,Math.floor(d))); //10000

// Get Integer "2" From d Variable 4 Methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variable b + d To Get This Values
console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); //66.67 => String
console.log(Number((Math.floor(b)/Math.ceil(d)).toFixed())); //67 => Number