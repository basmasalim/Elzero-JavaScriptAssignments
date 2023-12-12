/*  Challenge 1  */

let a = 10;
let b ="20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); 
console.log(++a + -b + +c++ - -a++ +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/////////////////////// Solution /////////////////////////////////

console.log(++a + +b++ + +c++ - +a++); 
/*
    11 + 20 + 80 - 11 = 100
*/

console.log(++a + -b + +c++ - -a++ +a); //b = 21 & c = 81 & a = 12
/*
    ++a = 13 => a++ = 13 => a = 14
    13 + (-21) + 81 - (-13) + 14 = 
    13 - 21 + 81 + 13 + 14 =
    26 + 81 + 14 - 21 = 
    40 + 81 - 21 = 
    40 + 60 = 100
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // c = 82 & a = 14 & b = 21 & true = 1
/*
    c = 82 => --c = 81 
    a = 14 => --a = 13 => a = 13 => --a = 12  
    b = 21 => b++ = 21 => b = 22 

    81 + 21 + (13 * 21) + - (22 * 13) + 12 - 1  = 100
*/


/* Challenge 2 */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-(Number(d)*Number(e)));//2000
console.log(-(+d*+e));//2000
console.log(-d * +e++ *g++); // 2000

console.log(++g *++e + ++f - d++); //173
console.log(-d +e * g + ++f); // 173

