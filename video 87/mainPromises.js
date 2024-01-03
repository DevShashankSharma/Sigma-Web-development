import fs from 'fs/promises';

console.log('starting...')
let data = await fs.writeFile('test2.txt', 'Hello, World!');

let data2 = await fs.readFile('test2.txt', 'utf8');

let data3 = await fs.appendFile('test2.txt', '\n\n\nHello, World!');
console.log(data, data2);
console.log('done!')