const jwt = require("jsonwebtoken")
const User = require("../models/User")

const requireAuth = async(req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    res.status(401).json({
      status: 1,
      error: "Authorization Token required"
    })
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.find({ _id }).select("_id")

    next()
  } catch (err) {
    res.status(401).json({
      error: "Unauthorized!!!"
    })
  }
}

module.exports = requireAuth