const Todo = require("../models/Todo")

// // Get all Todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).json({
      status: 0,
      todos
    })
  } catch (err) {
    res.status(400).json({
      status: 1,
      message: err.message
    })
  }
}

// // Create a todo
const createTodo = async (req, res) => {
  const { title, completed } = req.body

  if (!title) return res.status(400).json({ msg: "Please fill in a Todo!" })

  try {
    const todo = await Todo.create({ title, completed })
    res.status(201).json({
      status: 0,
      todo
    })
  } catch (err) {
    res.status(400).json({
      status: 1,
      message: err.message
    })
  }
}

// // Get a single todo
const getSingleTodo = async (req, res) => {
  const { id } = req.params

  try {
    const foundTodo = await Todo.findById(id)

    if (!foundTodo) {
      res.status(400).json({
        status: 1,
        message: "Try creating a todo. The Todo does not exist."
      })
    }

    res.status(200).json({
      status: 0,
      foundTodo
    })
  } catch (err) {
    res.status(404).json({
      status: 1,
      message: err.message
    })
  }
}

// // Delete Todo
const deleteTodo = async (req, res) => {
  const { id } = req.params

  try {
    const todoToDelete = await Todo.findById(id)

    if (!todoToDelete) {
      res.status(404).json({
        status: 1,
        message: "Try creating a todo. The Todo does not exist."
      })
    }

    const deletedTodo = await Todo.findOneAndDelete(todoToDelete)

    res.status(200).json({
      status: 0,
      deletedTodo,
      message: `Todo with the id ${ id } is successfully deleted.`
    })
  } catch (err) {
    res.status(400).json({
      status: 1,
      message: err.message
    })
  }
}

const updateTodo = async (req, res) => {
  const { id } = req.params

  try {
    const todoToUpdate = await Todo.findById(id)

    if(!todoToUpdate) {
      res.status(404).json({
        status: 1,
        message: "This todo can not be found. Try creating a new Todo."
      })
    }

    await Todo.findOneAndUpdate(todoToUpdate, { ...req.body })
    const todo = await Todo.findById(id)
    res.status(200).json({
      status: 0,
      todo,
      message: "Todo successfully updated."
    })
  } catch (err) {
    res.status(400).json({
      status: 1,
      message: err.message
    })
  }
}

module.exports = {
  getTodos,
  createTodo,
  getSingleTodo,
  deleteTodo,
  updateTodo
}