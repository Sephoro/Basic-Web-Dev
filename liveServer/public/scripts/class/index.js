'use strict'

fetch('/class/api/list')
  .then(function (response) {
    if (response.ok) { return response.json() } else { throw 'Failed to load classlist: response code invalid!' }
  })
  .then(function (data) {
    let classList = document.getElementById('classList')

    data.forEach(function (student) {
      let li = document.createElement('li')
      let liText = document.createTextNode(student.name)
      li.className += 'list-group-item'

      li.appendChild(liText)
      classList.appendChild(li)
    })
  })
  .catch(function (e) {
    alert(e)
  }

  )

