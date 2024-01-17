import mongoose from "mongoose";
import express from "express";
import { Employee } from "./models/employee.js";

// Connecting with the database
mongoose.connect("mongodb://localhost:27017/company");

// Creating a port
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // set the view engine to ejs

app.get("/", async (req, res) => {
  try {
    res.render("index", { foo: "FOO" });
  } catch (error) {
    console.error("Error retrieving employee data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const randomNumber = (obj) => {
  return Math.floor(Math.random() * obj.length);
};

let name = ["John", "Jane", "Bob"];
let salary = [1000, 2000, 3000];
let language = ["JavaScript", "Python", "Java"];
let city = ["New York", "Los Angeles", "Chicago"];

app.get("/generate", async (req, res) => {
  try {
    await Employee.deleteMany({});

    // Generate employee data
    for (let i = 0; i < 10; i++) {
      let e = await Employee.create({
        name: name[randomNumber(name)],
        salary: salary[randomNumber(salary)],
        language: language[randomNumber(language)],
        city: city[randomNumber(city)],
        isManager: Math.random() < 0.5 ? true : false,
      });
      console.log(e);
    }

    res.json({ message: "Employee data generated successfully" });
  } catch (error) {
    console.error("Error generating employee data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
