import mongoose from "mongoose";
import express from "express";
import { Employee } from "./models/employee.js";
import cors from "cors";

// Connecting with the database
mongoose.connect("mongodb://localhost:27017/company");

// Creating a port
const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const employee = new Employee({
      name: req.body.name,
      salary: req.body.salary,
      language: req.body.language,
      city: req.body.city,
      isManager: req.body.isManager == "yes" ? true : false,
    });
    await employee.save();
    console.log(employee,"Employee data saved successfully!");
    res.json({ message: "Employee data saved successfully!" });
  } catch (error) {
    console.error("Error saving employee data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", async (req, res) => {
  try {
    //Delete all data
    await Employee.deleteMany({});
    // Retrieve all employee data
    const data = await Employee.find();
    res.json(data);
  } catch (error) {
    console.error("Error retrieving employee data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/check", async (req, res) => {
  try {
    const data = await Employee.find(req.query);
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error("Error retrieving employee data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/remove", async (req, res) => {
  try {
    const data = await Employee.deleteOne(req.query);
    res.json(data);
  } catch (error) {
    console.error("Error retrieving employee data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
