// Select the database to use.
use("SIGMA");

// Insert a few documents into the Courses collection.
db.getCollection("Courses").insertMany([
  {
    name: "Python Basics",
    price: "15000",
    instructor: "Alice",
  },
  {
    name: "Web Development Fundamentals",
    price: "18000",
    instructor: "Bob",
  },
  {
    name: "Data Science Essentials",
    price: "22000",
    instructor: "Charlie",
  },
  {
    name: "C++ Programming",
    price: "19000",
    instructor: "David",
  },
  {
    name: "Mobile App Development",
    price: "25000",
    instructor: "Eva",
  },
  {
    name: "Machine Learning Basics",
    price: "23000",
    instructor: "Frank",
  },
  {
    name: "JavaScript Fundamentals",
    price: "16000",
    instructor: "Grace",
  },
  {
    name: "Artificial Intelligence Overview",
    price: "28000",
    instructor: "Hank",
  },
  {
    name: "Network Security",
    price: "20000",
    instructor: "Ivy",
  },
  {
    name: "Cloud Computing Essentials",
    price: "21000",
    instructor: "Jack",
  },
]);

 
// Print a message to the output window.
console.log('Done Inserting Data');

 
