/* let button = document.getElementById('addButton')

button.addEventListener('click', function () {
  let paragraph = document.createElement('p')
  let text = document.createTextNode('This is a student')
  paragraph.appendChild(text)
  let students = document.getElementById('studentList')
  students.appendChild(paragraph)
}, false)

let button2 = document.getElementById('headerButton')

button2.addEventListener('click', headerChange, false)

button4.addEventListener('click', headerChange, false)

function headerChange () {
  let heading = document.getElementById('heading')
  heading.innerHTML = 'EIE Staff: '
}

*/

let addButton = document.getElementById('addButton')
addButton.addEventListener('click', addName, false)

function addName () {
  let par = document.createElement('li')
  let textVal = document.getElementById('name').value
  let text = document.createTextNode(textVal)
  par.appendChild(text)
  let st = document.getElementById('stlist')
  st.appendChild(par)
}

// Adding Courses
let CourseList = ['ELEN4012', 'MECN4020', 'ELEN4016']

let count = 5

let addCButton = document.getElementById('addcourse')
addCButton.addEventListener('click', addCourse, false)

function addCourse () {
  let para_ = document.createElement('p')
  let text = document.createTextNode(String(count) + '. ' + CourseList[(count - 5) % 3])
  count++
  para_.appendChild(text)
  let c = document.getElementById('courseList')
  c.appendChild(para_)
}
// Deleting Courses
let deleteC = document.getElementById('delete')
deleteC.addEventListener('click', deleteCourse, false)

function deleteCourse () {
  let course = document.getElementById('elen4006')
  course.parentNode.removeChild(course)
}
