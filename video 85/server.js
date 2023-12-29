console.log("Server is running...");

let slugify = require('slugify')

let a = slugify('some $%&W string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
let b = slugify('some string', '_')  // some_string
console.log(b)