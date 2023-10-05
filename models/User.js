const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
})

userSchema.statics.signup = async function(email, password) {
  if (!email || !password) {
    throw new Error("Email or Password can not empty!!!")
  }

  if (!(validator.isEmail(email))) {
    throw new Error("Email is invalid!!!!")
  }

  if (!(validator.isStrongPassword(password))) {
    throw new Error("Password is invalid!!!!")
  }

  const emailExists = await this.findOne({ email })

  if (emailExists) {
    throw new Error("Email in use, already!!!")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password:hash })

  return user
}

userSchema.statics.login = async function(email, password) {
  if (!email || !password) {
    throw new Error("Email or Password can not be empty!!!")
  }

  const user = this.findOne({ email })

  if (!user) {
    throw new Error("Email or Password is incorrect!!!")
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password)

  if (!isPasswordMatch) {
    throw new Error("Email or Password is incorrect!!!")
  }

  return user
}

module.exports = mongoose.model("User", userSchema)