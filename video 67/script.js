console.log("Hello World");

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes[0]);
console.log(document.body.childNodes[1].childNodes[1]);
console.log(document.body.childNodes[1].childNodes[2]);
console.log(document.body.childNodes[1].childNodes[3]);
console.log(document.body.childNodes[1].firstChild);
console.log(document.body.childNodes[1].firstElementChild);
console.log(document.body.childNodes[1].lastElementChild);

let cont = document.body.childNodes[1];

// cont.style.backgroundColor = "red";

cont.lastElementChild.style.backgroundColor = "red";
cont.firstElementChild.style.backgroundColor = "yellow";

console.log(cont.firstElementChild.parentElement);

document.body.firstElementChild.style.backgroundColor = "green";

console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.children);
console.log(document.body.firstElementChild.children[1]);
console.log(document.body.firstElementChild.children[1].nextElementSibling);
console.log(document.body.firstElementChild.children[1].previousElementSibling);
console.log(document.body.firstElementChild.children[1].nextSibling);

console.log(document.body.children);
console.log(document.body.children[1]);
console.log(document.body.children[1].rows);
