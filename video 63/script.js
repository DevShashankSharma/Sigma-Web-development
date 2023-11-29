let arr = [2,3,4,5,6,7]  // array are mutable

arr[0] = 566 ;
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length,typeof arr);

// console.log(arr.toString());

// console.log(arr.join(" and "));

// console.log(arr.pop());
// console.log(arr);

// console.log(arr.push(8));
// console.log(arr);
// console.log(arr.push("Shashank"));
// console.log(arr);

// console.log(arr.shift());  
// console.log(arr);

// console.log(arr.unshift("Shashank"));
// console.log(arr);

// console.log(arr.length);
// delete arr[0];
// console.log(arr);
// console.log(arr.length);


// let numbers = [1,2,3,4,5,6,7,8,9,10];
// numbers.splice(0,2);
// console.log(numbers);

let a = [1,93,5,6,88];

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr);
// })


let object = {
    a: 1,
    b: 2,
    c: 3
}
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key,element);
//     }
// }


// for (const iterator of a) {
//     console.log(iterator);
// }





let arr2 = [1,2,3,4,5,6,7];
// let newArr = [];

// for(let i=0;i<arr2.length;i++){
//     newArr.push(arr2[i]*2);
// }
// console.log(newArr);

let newArr = arr2.map((value,index,arr)=>{
    return value*2;
})
console.log(newArr);


// newArr = arr2.filter((value)=>{
//     return value>4;
// })
// console.log(newArr);

const greaterThanSeven = (value)=>{
    return value>4;
}
newArr = arr2.filter(greaterThanSeven);
console.log(newArr);


let arr3 = [1,2,3,4,5,6,7];

const red = (a,b) =>{
    return a+b;
}

console.log(arr2.reduce(red));

console.log(Array.from("hello"));