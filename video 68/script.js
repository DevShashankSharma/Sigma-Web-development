// console.log("Hello");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";


// document.getElementById("yellow").style.backgroundColor = "yellow";


// document.querySelector(".box").style.backgroundColor = "green";

// console.log(document.querySelectorAll(".box"));
// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "green";
// })


console.log(document.getElementsByTagName("div"));

e = document.getElementsByTagName("div");
console.log(e[1].matches("#yellow"))
console.log(e[6].matches("#yellow"))

console.log(e[3].closest("#yellow"));
console.log(e[3].closest(".container"));
console.log(e[3].closest("html"));


console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(e[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))