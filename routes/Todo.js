const router = require("express").Router()

const {
  getTodos,
  createTodo,
  getSingleTodo,
  deleteTodo,
  updateTodo
} = require("../controller/Todo")

router.route("/").get(getTodos).post(createTodo)
router.route("/:id").get(getSingleTodo).delete(deleteTodo).patch(updateTodo)

module.exports = router