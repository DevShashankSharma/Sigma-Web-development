console.log("this is for javascript data type and variables");


var a = 5;
// a = a+4;  //allowed
var b = 6;
var c = "Shashank";

var _a = 5;
// var 55b = 6; // not allowed

console.log(a+b+8);

console.log(typeof(a),typeof(b),typeof(c));


const a1 = 6;
// a1 = a1+6;  //not allowed


{
    let a = 66 ;
    var a2 = 67 ;
    console.log(a);
    console.log(a2);
}

console.log(a);
console.log(a2);






// data type 
let x = "Shashank";
let y = 5;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);



//Object

const o = {
    name: "Shashank",
    "job role": "Programmer",
    age: 22,
    is_handsome: true,
}

console.log(o);

o.salary = "100crores";
console.log(o);

o.salary = "500crores";
console.log(o);



// Quiz 
const stu = {
    name: "Shashank",
    ph_no: 1234567890,
    class: 10,
}
console.log(stu);


let str = "Shashank";
str = str+8;
console.log(str,typeof str);

