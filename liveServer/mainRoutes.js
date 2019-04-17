'use strict'

let path = require('path')
let express = require('express')
let mainRouter = express.Router()

mainRouter.get('/', function (req, res) {
  res.send('Hello Boikanyo, Elias and the rest of the World!, I\'m Node.js')
})

mainRouter.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

module.exports = mainRouter
