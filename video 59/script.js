let fault = Math.random();
console.log(fault)

// Importing the module 
const readline = require("readline-sync"); 
  
// Enter the number 
let no1 = Number(readline.question()); 
let no2 = Number(readline.question());
let operation = readline.question();
// console.log(no1, no2, operation);
// console.log(typeof no1, typeof no2, typeof operation);

if(fault < 0.1){
    switch(operation){
        case "+":
            console.log(no1 - no2);
            break;
        case "-":
            console.log(no1 / no2);
            break;
        case "*":
            console.log(no1 + no2);
            break;
        case "/":
            console.log(no1 ** no2);
            break;
        default:
            console.log("Invalid Input");
    }
}else{
    switch(operation){
        case "+":
            console.log(no1 + no2);
            break;
        case "-":
            console.log(no1 - no2);
            break;
        case "*":
            console.log(no1 * no2);
            break;
        case "/":
            console.log(no1 / no2);
            break;
        default:
            console.log("Invalid Input");
    }
}