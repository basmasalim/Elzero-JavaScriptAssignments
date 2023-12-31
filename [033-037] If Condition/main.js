//Assignment-01
let num = 19;

if (num < 10) {
  console.log("00" + num);
} else if (num > 10 && num < 100) {
  console.log("0" + num);
} else if (num >= 100) {
  console.log(num);
}

//----------------------------------------------------------------------------
//Assignment-02

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof str == typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

//----------------------------------------------------------------------------
//Assignment-03
let num2 = 10;
let num3 = 30;
let num4 = "30";

if (num4 > num2 && typeof num4 != typeof num3) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
}  if (num4 > num2 && num4 == num3) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
} if (num4 !== num2 && typeof(num4) !== typeof(num3)) {
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}
//----------------------------------------------------------------------------
//Assignment-04

