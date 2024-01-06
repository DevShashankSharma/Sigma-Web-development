const express = require('express')
const fs = require('fs')
const bird = require('./routes/bird')
const app = express()
const port = 3000

// app.use(express.static('public'))   
app.use('/bird', bird)

// writting middleware
// Middleware 1  --> Logging for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.shashank = "Hello Shashank"
    console.log('Time:', Date.now() , req.method, req.url)
    fs.appendFileSync('server.log', Date.now() + ' - ' + req.method + ' - ' + req.url + '\n')
    // res.send('Middleware 1')
    next()
})

// Middleware 2
app.use((req, res, next) => {
    req.shashank = "Hello Shashank 2"
    console.log('Time:', Date.now())
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send(`'Hello about!', ${req.shashank}`)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})