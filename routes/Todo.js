const router = require("express").Router()

const requireAuth = require("../middlewares/auth")

const {
  getTodos,
  createTodo,
  getSingleTodo,
  deleteTodo,
  updateTodo
} = require("../controller/Todo")

router.use(requireAuth)

router.route("/").get(getTodos).post(createTodo)
router.route("/:id").get(getSingleTodo).delete(deleteTodo).patch(updateTodo)

module.exports = router