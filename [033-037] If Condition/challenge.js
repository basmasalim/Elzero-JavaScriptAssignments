/*
    If Challenge
*/
// =================================> Task 1
let a = 10;
// if(a < 10){
//     console.log(10);
// }else if(a >= 10 && a <= 40){
//     console.log('10 To 40');
// }else if(a > 40){
//     console.log('> 40');
// }else{
//     console.log('UnKnown');
// }

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log(" > 40")
  : console.log("UnKnown");

// =================================>  Task 2
let st = 'Elzero Web School';
if ((st.length*2).toString() == '34') {
    console.log('Good');
}

// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
    console.log("Good");
  }

if('st'!=='string'){
    console.log('Good');
}

if (typeof(st.length )=== 'number') {
    console.log('Good');

}

if ((st.slice(0,6)+st.slice(0,6)) === 'ElzeroElzero') {
    console.log('Good');

}
