const User = require("../models/User")
const jwt = require("jsonwebtoken")

// // Create toke n logic
const createToken = async (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

// TODO: create a signUp controller
// // Create a signUp logic
const signUp = async (req, res) => {
  const { email, password } = req.body

  const user = await User.signup(email, password)

  const token = createToken(user._id)
}