const User = require("../models/User")
const jwt = require("jsonwebtoken")

// // Create toke n logic
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json({
      status: 0,
      users
    })
  } catch (err) {
    res.status(400).json({
      status: 1,
      error: err.message
    })
  }
}

// TODO: create a signUp controller
// // Create a signUp logic
const signUp = async (req, res) => {
  const { email, password } = req.body
  
  try {
    const user = await User.signup(email, password)

    const token = createToken(user._id)

    res.status(201).json({
      status: 0,
      email,
      token
    })
  } catch (err) {
    res.status(400).json({
      status: 1,
      error: err.message
    })
  }
}

module.exports = {
  getUsers,
  signUp
}