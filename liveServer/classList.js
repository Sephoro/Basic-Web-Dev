'use strict'

let list = []

module.exports = {

  add: function (student) {
    list.push(student)
  },
  edit: function (student, index) {
    list[index] = student
  },
  get: function (index) {
    return list[index]
  },
  delete: function (index) {
    list.splice(index, 1)
  },
  size: function () {
    return list.length
  },
  getList: function () {
    return list
  }

}
