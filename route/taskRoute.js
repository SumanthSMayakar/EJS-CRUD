const route = require('express').Router()
const taskController = require('../controller/taskController')

route.get(`/`,taskController.index)
route.get(`/task/new`,taskController.new)
route.get(`/task/edit/:id`,taskController.edit)

route.all(`/*`, taskController.notFound)

module.exports = route