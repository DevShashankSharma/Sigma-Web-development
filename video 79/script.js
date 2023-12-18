let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Please enter a valid number");
}

let sum = parseInt(a) + parseInt(b);

function main() {
  let x = 10;
  try {
    console.log(sum * x);
    return true
  } catch (error) {
    console.log(error, error.message, error.name, error.stack);
    return false
  } finally {
    console.log("files are being closed and db connection closed successfully");
  }
}

let c = main();
