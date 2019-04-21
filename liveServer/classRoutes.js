'use strict'

let path = require('path')
let express = require('express')
let classList = require('./classList.js')

let router = express.Router()

// let classList = []

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

// RESTful Interface

router.get('/api/list', function (req, res) {
  res.json(classList.getList())
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList.get(req.params.id))
})

router.post('/api/create', function (req, res) {
  let student = { name: req.body.student, studentNumber: req.body.stNumber, electives: req.body.courses }
  console.log('Creating a student entry', student)
  classList.add(student)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/delete', function (req, res) {
  if (req.body.studentIndex <= classList.size()) {
    console.log('Deleting a student : ', classList.get(req.body.studentIndex))
    classList.delete(req.body.studentIndex)
    res.redirect(req.baseUrl + '/api/list')
  } else {
    console.log('Out of Bounds')
    res.redirect(req.baseUrl + '/api/list')
  }
})

router.post('/api/edit', function (req, res) {
  let index = req.body.editStudent.split(',')[0]
  let value = req.body.editStudent.split(',')[1]
  if (index <= classList.size()) {
    console.log('Editing a student entry : ', classList.get(index))
    classList.edit(value, index)
    res.redirect(req.baseUrl + '/api/list')
  } else {
    console.log('Out of Bounds')
    res.redirect(req.baseUrl + '/api/list')
  }
})

module.exports = router
