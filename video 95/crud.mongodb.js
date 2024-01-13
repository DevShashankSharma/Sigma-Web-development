//  CRUD operations in mongodb
use("CrudDB");

// console.log(db)

// Create collection
// db.createCollection("Courses")

// db.Courses.insertOne({
//     _id: 1,
//     name: "NodeJS",
//     fee: 2000,
//     duration: 6,
//     assignment: 10,
//     project: 10
// })

// const coursesArray = [
//     {
//       _id: 11,
//       name: "NodeJS",
//       fee: 2000,
//       duration: 6,
//       assignment: 10,
//       project: 10
//     },
//     {
//       _id: 2,
//       name: "JavaScript Fundamentals",
//       fee: 1500,
//       duration: 4,
//       assignment: 8,
//       project: 5
//     },
//     {
//       _id: 3,
//       name: "React Development",
//       fee: 2500,
//       duration: 8,
//       assignment: 12,
//       project: 15
//     },
//     {
//       _id: 4,
//       name: "Python Basics",
//       fee: 1800,
//       duration: 5,
//       assignment: 9,
//       project: 7
//     },
//     {
//       _id: 5,
//       name: "Angular Essentials",
//       fee: 2200,
//       duration: 7,
//       assignment: 11,
//       project: 12
//     },
//     {
//       _id: 6,
//       name: "HTML and CSS Mastery",
//       fee: 1600,
//       duration: 4,
//       assignment: 6,
//       project: 8
//     },
//     {
//       _id: 7,
//       name: "MongoDB for Developers",
//       fee: 2300,
//       duration: 6,
//       assignment: 10,
//       project: 14
//     },
//     {
//       _id: 8,
//       name: "Vue.js Advanced Concepts",
//       fee: 2400,
//       duration: 8,
//       assignment: 13,
//       project: 16
//     },
//     {
//       _id: 9,
//       name: "Express.js in Action",
//       fee: 2100,
//       duration: 7,
//       assignment: 11,
//       project: 13
//     },
//     {
//       _id: 10,
//       name: "Full Stack Development Bootcamp",
//       fee: 3000,
//       duration: 12,
//       assignment: 20,
//       project: 25
//     }
//   ];

//   console.log(coursesArray);

//   db.Courses.insertMany(coursesArray)

// Read operation
//  let a =  db.Courses.find({ fee: 1500 })
//  console.log(a)

// let b = db.Courses.findOne({ fee: 1500 })

// Update operation
// db.Courses.updateOne({ fee: 1500 }, { $set: { fee: 2000 } })

// db.Courses.updateMany({ fee: 2000 }, { $set: { fee: 2500 } })

// Delete operation
// db.Courses.deleteOne({ _id: 5 })

// db.Courses.deleteMany({ fee: 3000 });
db.Courses.deleteMany({ project: 10 });