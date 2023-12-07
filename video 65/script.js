// let no = prompt("Enter an number : ");

// if (no == 0) {
//   console.log(1);
// } else {
//   let arr = [];

//   for (let i = 0; i < no; i++) {
//     arr.push(i + 1);
//   }

//   console.log(
//     arr.reduce((a, b) => {
//       return a * b;
//     })
//   );
// }

// using reduce new method
let a = 2;

function factorial(number) {
  if(number == 0){
    return 1;
  }
  let arr = Array.from(Array(number + 1).keys());
  // console.log(arr);
  // console.log(arr.slice(1));
  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return c;
}

console.log(factorial(a));

// using for loop
// let fact = 1;
// if (no != 0) {
//   for (let i = 1; i <= no; i++) {
//     fact *= i;
//   }
// }
// console.log(fact);
