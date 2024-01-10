const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = [1, 2, 3, 4, 5]
//   res.sendFile('templates/index.html', {root: __dirname})
    res.render('index.ejs', {siteName: siteName, searchText: searchText,arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas When and Why?" 
    let blogDesc = "Adidas is a big brand"
    res.render('index.ejs', {blogTitle: blogTitle, blogDesc: blogDesc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})