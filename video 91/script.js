const fs = require('fs'); 
// // console.log(fs)

// // Arranging files inside folder
// const files = fs.readdirSync('./video 91');
// // console.log(files)

// for (const file of files) {
//     if(file == "script.js") continue;
//     console.log(file)
//     let exe = file.split(".")[1].toUpperCase();
//     if (!fs.existsSync(`./video 91/${exe}`)) {
//         fs.mkdirSync(`./video 91/${exe}`);
//     }  
//     fs.writeFileSync(`./video 91/${exe}/${file}`, fs.readFileSync(`./video 91/${file}`));
//     fs.unlinkSync(`./video 91/${file}`);
// }



// get files from folder clear folder
const folders = fs.readdirSync('./video 91');
console.log(folders)  

for (const folder of folders) {
    if(folder == "script.js") continue;
    const files = fs.readdirSync(`./video 91/${folder}`);
    console.log(files)
    for (const file of files) {
        fs.writeFileSync(`./video 91/${file}`, fs.readFileSync(`./video 91/${folder}/${file}`));    
        fs.unlinkSync(`./video 91/${folder}/${file}`);
    }
    fs.rmdirSync(`./video 91/${folder}`);
} 