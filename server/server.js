const express = require('express')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/apiRoutes')
const path = require('path')
const API_PORT = 3001

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/build'))

app.use('/api', apiRoutes)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// launch our backend into a port
http.listen(API_PORT, function () {
  console.log(`listening on *:${API_PORT}`)
})
