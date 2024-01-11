const fs = require("fs");
const path = require("path");

let basePath = "D:\\Sigma-Web-development\\video 91";

// get Folder from folders 
const folders = fs.readdirSync(basePath);
// console.log(folders)

for (const folder of folders) {
    if(folder == "ArrangingFileInsideFolder.js"|| folder == "ExtractingFileFromFolder.js") continue;
 
    // get files from folder
    const files = fs.readdirSync(path.join(basePath, folder));
    // console.log(files)

    // changing path from folder to file
    for (const file of files) {
        fs.renameSync(path.join(basePath, folder, file), path.join(basePath, file));
    }
    fs.rmdirSync(`./video 91/${folder}`);
}
