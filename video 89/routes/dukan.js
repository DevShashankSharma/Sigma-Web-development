const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Dukan home page')
})

module.exports = router