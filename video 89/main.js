const express = require("express");
const blog = require('./routes/blog') 
const dukan = require('./routes/dukan')
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog', blog) 
app.use('/dukan', dukan)

// app.get("/", (req, res) => {
//   console.log("Hey this is get request");
//   res.send("Hello World!");
// });

// app.post("/", (req, res) => {
//   console.log("Hey this is post request");
//   res.send("Hello World by post!");
// });

// app.put("/", (req, res) => {
//   console.log("Hey this is put request");
//   res.send("Hello World by put!");
// });

// app.delete("/", (req, res) => {
//   console.log("Hey this is delete request");
//   res.send("Hello World by delete!");
// });

// can be create like this
app
  .get("/", (req, res) => {
    console.log("Hey this is get request");
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("Hey this is post request");
    res.send("Hello World by post!");
  })
  .put("/", (req, res) => {
    console.log("Hey this is put request");
    res.send("Hello World by put!");
  })
  .delete("/", (req, res) => {
    console.log("Hey this is delete request");
    res.send("Hello World by delete!");
  });

  app.get('/index',(req, res) => {
    console.log('Hey this is index');
    // res.send('Hello World index!');
    res.sendFile('/template/index.html' , {root: __dirname})
  })

  app.get('/about',(req, res) => {
      res.json({message: 'about page', status: 200, success: true,name:["raj","kumar"]})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
