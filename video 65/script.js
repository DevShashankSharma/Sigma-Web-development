let no = prompt("Enter an number : ");

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




// using for loop
let fact = 1;
if (no != 0) {
  for (let i = 1; i <= no; i++) {
    fact *= i;
  }
}
console.log(fact);
