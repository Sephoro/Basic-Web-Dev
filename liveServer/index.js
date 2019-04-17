'use strict'
let express = require('express')
let app = express()
let path = require('path')

// loading routers
let mainRouter = require('./mainRoutes.js')
let classRouter = require('./classRoutes')

// mounting routers
app.use('/', mainRouter)
app.use('/class', classRouter)

// Load Styler
app.use(express.static(path.join(__dirname, 'views', 'class', 'public', 'css', 'styler.css')))

app.listen(3000)
console.log('Express server running port 3000')
