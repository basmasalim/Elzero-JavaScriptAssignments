// ? Anonymous Function
let calc = function (num1, num2) {
  return num1 + num2;
};

console.log(calc(10, 20));

// تستخدم في حالة الزرار
document.getElementById("show").onclick = function () {
  console.log("show");
};

// setTimeout(() => {
//   console.log("goooood");
// }, 2000);

// ? ----------------- Return Nested Function -----------------
function sayMessage(fName, lName) {
  let message = `Hello`;
  function concateMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concateMsg();
}

console.log(sayMessage("Basma", "Salim"));

// ? ----------------- Arrow Function Syntax-----------------
// let print = () => 10;
let print = _ => 10;

console.log(print());

// ? ----------------- Scope - Global And Local -----------------
// ? ----------------- Scope - Block -----------------
// var is global scope

var x = 10;
if (10 === 10) {
  // console.log(`From If Block ${x}`);
  // let x = 50; //! not read
}

console.log(`From Global ${x}`);

// ? ----------------- Scope - Lexical (Static) -----------------
/**
 * ? Search
 * - Execution Context
 * - Lexical Environment
 */

function parent(){
  let a = 10;
  function child(){
    console.log(`From child ${a}`);
    // console.log(`From child ${b}`); //! can not read b
    function grand(){
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand()
  }
  child()
}
parent()