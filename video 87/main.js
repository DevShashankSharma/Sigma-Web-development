const fs = require('fs');

// console.log(fs)

console.log('starting...')
// fs.writeFileSync('test.txt', 'Hello, World!')
// fs.writeFile('test1.txt', 'Hello, World!', () => {
//     console.log('done!')
//     fs.readFile('test1.txt', 'utf8', (err, data) => {
//         console.log(err,data)
//     })
// })

fs.appendFile('test1.txt', 'Hello, Wooooorld!', () => {
    console.log('done!')
    fs.readFile('test1.txt', 'utf8', (err, data) => {
        console.log(err,data)
    })
})
console.log('donettt!')