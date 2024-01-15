let start = 0;
let swappedName = "elZerO";
let characters = swappedName.split('');

for (let i = start; i < characters.length; i++) {
    if (characters[i] === characters[i].toLowerCase()) {
        characters[i] = characters[i].toUpperCase();
    } else {
        characters[i] = characters[i].toLowerCase();
    }
}

console.log(characters.join(''));
