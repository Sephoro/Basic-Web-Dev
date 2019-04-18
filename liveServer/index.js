'use strict'
let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')

// loading routers
let mainRouter = require('./mainRoutes.js')
let todoRouter = require('./classRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mounting routers

app.use('/', mainRouter)
app.use('/class', todoRouter)

// Load Styler
app.use('/cdn', express.static('public'))

app.listen(3000)
console.log('Express server running port 3000')
