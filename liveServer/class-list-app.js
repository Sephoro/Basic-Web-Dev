'use strict'

const filterByElective = function (student, elective) {
  let flag = false
  student.electives.findIndex(function (element) {
    if (elective === element) flag = true
  }
  )
  return flag
}

const electiveOne = {
  courseCode: 'ELEN4010',
  yearOfferd: 4
}

const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOfferd: 4
}

const electiveThree = {
  courseCode: 'ELEN4020',
  yearOfferd: 4
}

const electiveFour = {
  courseCode: 'ELEN4017',
  yearOfferd: 4
}

let students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudey: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudey: 4,
    electives: [electiveOne, electiveTwo, electiveFour]

  },
  {
    name: 'Jade',
    studentNumber: 678345,
    yearOfStudey: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudey: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }

]

// Init the list
let list = document.createElement('ol')
let studentsDiv = document.getElementById('students')
studentsDiv.appendChild(list)

// Adding students to List
let DBaddButton = document.getElementById('DBadd')
let iter = 0

DBaddButton.addEventListener('click', function () {
  if (iter !== (students.length)) {
    let entry = document.createTextNode(students[iter].name)
    let li = document.createElement('li')
    li.appendChild(entry)
    list.appendChild(li)

    iter++
  } else {
    alert('Maximum number of students reached from Database reached! Add new students?\n')
  }
}, false)

// Live Filtering
let lit = list.getElementsByTagName('li')
document.querySelector('#search-text').addEventListener('input', function () {
  let input = document.getElementById('search-text').value.toUpperCase()

  for (let i = 0; i < lit.length; i++) {
    if (lit[i].textContent.toUpperCase().indexOf(input) > -1) {
      lit[i].style.display = ''
    } else {
      lit[i].style.display = 'none'
    }
  }
})

// Adding new students
let addButton = document.getElementById('add-student')

addButton.addEventListener('click', function () {
  let entry = document.getElementById('new-student-text').value
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(entry))
  list.appendChild(li)
}, false)
