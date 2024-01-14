/*
    Array Challenge
*/
let zero = 0;
let counter = 3;


let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

let ass1 = my.reverse().slice(counter-true,my.length);
console.log(ass1); // ['Osama', 'Elham','Mazero','Ahmed']

let ass2 = my.slice(counter, counter+true+true)
console.log(ass2); //['Elham','Mazero']


let ass3 = (my[counter].slice(zero,counter-true)).concat(my[counter+true].slice(counter-true,counter+counter))
console.log(ass3.toString()); //Elzero
// ! =========================> oR
my.splice(zero, counter+counter, "Elzero");
console.log(my);


// let ass4 = my[4];
console.log(((my[zero][my.length+counter]) + (my[zero][counter+true+true]).toUpperCase()).toString()); //rO

