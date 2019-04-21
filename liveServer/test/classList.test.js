'use strict'
let classList = require('../classList.js')

test('Hello World: hello should greet the world', () => {
  let hello = 'world'
  expect(hello).toEqual('world')
})

let student1 = {
  name: 'Elias',
  studentNumber: '1427726',
  electives: 'ELEN4010, ELEN4020'
}

let student2 = {
  name: 'Boikanyo',
  studentNumber: '1386807',
  electives: 'ELEN4017, ELEN4010'
}

// Sorage of students

describe('Can add', () => {
  test('a single student to the Classlist', () => {
    classList.add(student1)
    expect(classList.size()).toEqual(1)
  })

  test('Multiple students to the ClassList', () => {
    classList.add(student2)
    expect(classList.size()).toEqual(2)
  })
}
)
// Storage of a student

describe('Correctly stores or returns', () => {
  test('the student objects', () => {
	  expect(classList.get(0)).toEqual(student1)
  })

  test('student\'s name', () => {
    expect(classList.get(0).name).toEqual(student1.name)
  })

  test('student\'s student number', () => {
    expect(classList.get(0).studentNumber).toEqual(student1.studentNumber)
  })

  test('student\'s electives', () => {
    expect(classList.get(0).electives).toEqual(student1.electives)
  })
})

// Edit a student

test('can edit a partcular student', () => {
  let edit = {
    name: 'Bingi',
    studentNumber: '1386807',
    electives: 'ELEN4017, ELEN4010'
  }
  classList.edit(edit, 1)
  expect(classList.get(1)).toEqual(edit)
})

// Deleting a student entry

test('can delete a particular student entry', () => {
  classList.delete(0) // Delete the zeroth entry ie student1
  expect(classList.size()).toEqual(1)
})
