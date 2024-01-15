/*
    Loop - For Challenge
*/

let myFreinds = [1, 2, 3, "basma", "asmaa", "soso"];

let onlyNames = [];
for (let i = 0; i < myFreinds.length; i++) {
  if (typeof myFreinds[i] === "string") {
    onlyNames.push(myFreinds[i]);
  }
}
// console.log(onlyNames);

// !=======================================
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];

// ?========= Label
mainLoop: for (let i = 0; i < products.length; i++) {
  // console.log(`### ${products[i]}`);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    // console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}

// !=======================================
let showCount = 5;
document.write(`<h1>${showCount} Product</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i+1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`)
    
  }
  document.write(`<p>${colors.join(' | ')}</p>`)
  document.write(`</div>`);
}
