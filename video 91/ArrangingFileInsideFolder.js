const fs = require("fs");
const path = require("path");
// // console.log(fs)

// // get files from folder
let basePath = "D:\\Sigma-Web-development\\video 91";

// Arranging files inside folder
// const files = fs.readdirSync('./video 91');
const files = fs.readdirSync(basePath);
// console.log(files)

for (const file of files) {
  if (file == "ArrangingFileInsideFolder.js"|| file == "ExtractingFileFromFolder.js") continue;
  // console.log(file)

  // find length of array and get extension
  let len = file.split(".").length;
  let exe = file.split(".")[len - 1].toUpperCase();

  // if (!fs.existsSync(`./video 91/${exe}`)) {
  //     fs.mkdirSync(`./video 91/${exe}`);
  // }
  // fs.writeFileSync(`./video 91/${exe}/${file}`, fs.readFileSync(`./video 91/${file}`));
  // fs.unlinkSync(`./video 91/${file}`);

  // Another method to create folder
  if (!fs.existsSync(path.join(basePath, exe))) {
    fs.mkdirSync(path.join(basePath, exe));
  }
  fs.renameSync(path.join(basePath, file), path.join(basePath, exe, file));
}

