const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  completed: {
    type: Boolean,
    default: false
  },

  userId: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Todo", todoSchema)