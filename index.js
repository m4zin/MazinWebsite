const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static('public'))
app.use('/contact', require('./routes/contact'))

app.listen(port, () => {
  console.log(`Mazin's Website listening on port ${port}`)
})