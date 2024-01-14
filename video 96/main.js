// https://www.npmjs.com/package/mongodb

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let connection = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    name: "Hey First Todo",
    desc: "Description of this todo",
    isDone: false,
    days: 1
  });
  todo.save();
  res.send("Hello World!");
});

app.get("/a", async (req, res) => {
    const todo = await Todo.findOne({});
    console.log(todo)
    // res.json({title: todo.title ,desc : todo.desc, isDone: todo.isDone, days: todo.days});
    res.json(todo)
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
