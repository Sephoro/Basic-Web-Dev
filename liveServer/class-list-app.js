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
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveFour]

  },
  {
    name: 'Jade',
    studentNumber: 678345,
    yearOfStudy: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }

]

// Init the list
let table = document.getElementById('st-table')

// Adding students to List
let DBaddButton = document.getElementById('DBadd')
let iter = 0

DBaddButton.addEventListener('click', function () {
  if (iter !== (students.length)) {
    // TODO optimise this process
    let td1 = document.createElement('td')
    td1.appendChild(document.createTextNode(students[iter].name))
    let td2 = document.createElement('td')
    td2.appendChild(document.createTextNode(students[iter].studentNumber))
    let td3 = document.createElement('td')
    td3.appendChild(document.createTextNode(students[iter].yearOfStudy))
    let td4 = document.createElement('td')
    td4.appendChild(document.createTextNode(students[iter].electives[0].courseCode + ', ' + students[iter].electives[1].courseCode + ', ' + students[iter].electives[2].courseCode))
    let tr = document.createElement('tr')
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    table.appendChild(tr)
    iter++
  } else {
    alert('Maximum number of students reached from Database reached! Add new students?\n')
  }
}, false)

// Live Filtering
let lit = table.getElementsByTagName('tr')
document.querySelector('#search-text').addEventListener('input', function () {
  let input = document.getElementById('search-text').value.toUpperCase()

  for (let i = 1; i < lit.length; i++) {
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
  // TODO Optimise this process
  let td1 = document.createElement('td')
  td1.appendChild(document.createTextNode(document.getElementById('new-student-text').value))
  let td2 = document.createElement('td')
  td2.appendChild(document.createTextNode(document.getElementById('new-st-number').value))
  let td3 = document.createElement('td')
  td3.appendChild(document.createTextNode(document.getElementById('new-yos').value))
  let td4 = document.createElement('td')
  td4.appendChild(document.createTextNode(document.getElementById('new-electives').value))
  let tr = document.createElement('tr')
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)
  table.appendChild(tr)
}, false)
