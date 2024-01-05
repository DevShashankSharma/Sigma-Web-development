const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.put , app.post , app.delete 
app.get('/', (req, res) => {
  res.send('Hello World3!')
})

app.get('/about', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.get('/help', (req, res) => {
  res.send('Hello help!')
})

app.get('/blog/:slug', (req, res) => {
        // logic to fetch{slug}  from db
    //   console.log(req)
      console.log(req.params)  // output { slug: 'intro-js' }
      // for URL : http://localhost:3000/blog/intro-js?name=js&mode=dark
      console.log(req.query)  // output { name: 'js', mode: 'dark' }
      res.send(`Hello ${req.params.slug}`)
})

app.get('/blog/:slug/:id', (req, res) => {
  res.send(`Hello ${req.params.slug} and ${req.params.id}`)
})


// app.get('/blog/intro-js', (req, res) => {
//     // logic to fetch intro js from db
//   res.send('Hello blog! for js')
// })

// app.get('/blog/intro-python', (req, res) => {
//   res.send('Hello blog! for python')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})