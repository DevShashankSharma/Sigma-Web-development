console.log("let learn about conditional statement");

let age = 3;
let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);

if (age + grace > 18) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

age += grace;
console.log(age);

// === concept
let a = 3;
let b = "3";

if (a === b) {
  console.log("Equal");
} else {
  console.log("Not equal");
}


if(age < 18){ 
    console.log("You cannot drive");
}else if(age > 18){
    console.log("You can drive");
}else if(age === 18){
    console.log("You can vote");
}else{
    console.log("You cannot vote");
}



age>18 ? console.log("You can drive") : console.log("You cannot drive")


switch(age){
    case 18: console.log("You can vote");
    break;
    case 17: console.log("You cannot vote");
    break;
    case 20: console.log("You can drive");
    break;
    default: console.log("You are child");
}