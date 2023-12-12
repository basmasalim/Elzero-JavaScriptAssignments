console.log(1e6);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log((100).toString());
console.log(100..toString());

console.log(100.55555.toFixed(2));

console.log(parseInt("100"));
console.log(parseInt("100 Basma")); //100
console.log(+"100 Basma"); //NAN

console.log(Number.isInteger("100")); //false
console.log(Number.isInteger(100.500)); //false
console.log(Number.isInteger(100)); //true

console.log((Number.isNaN(100))); //false

console.log(Math.round(99.2)); //99
console.log(Math.round(99.5)); //100

console.log(Math.ceil(99.2)); //100
console.log(Math.floor(99.2)); //99

console.log(Math.min(10,20,-30,40,50,90,100));
console.log(Math.max(10,20,-30,40,50,90,100));

console.log(Math.pow(2,4));

console.log(Math.random());

console.log(Math.trunc(99.5)); //99