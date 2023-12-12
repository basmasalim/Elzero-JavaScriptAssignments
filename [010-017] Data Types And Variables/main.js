//Assignment-01
let numberOne = 10,
  numberTwo = 20;

let conc = numberOne + "" + numberTwo;
console.log(conc); // Normal Concatenate => 1020
console.log(typeof conc); // Normal Concatenate => String

let concEs6 = `${numberOne}${numberTwo}`;
console.log(concEs6); // Template Literals Way => 1020
console.log(typeof concEs6); // Template Literals Way => String

/*
  Normal Concatenate
  20
  10
*/
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}`);

//----------------------------------------------------------------------------
//Assignment-02

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
//----------------------------------------------------------------------------
//Assignment-03

console.log(
        '`I\'m In\n\\\\\nLove \\\\ """ \'\'\' \n++ With ++\n\\"""\\""" \n\"\"\JavaScript\"\"\``'
);

//----------------------------------------------------------------------------
//Assignment-04

let a = 21;
let b = 20;

console.log("_" + a + "_" + ((b + "" + a) + "_").repeat(3) + b + "_"); // _21_2021_2021_2021_20_
console.log('_' + `${a}_${b}`.repeat(4) + '_')
