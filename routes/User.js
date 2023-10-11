const router = require("express").Router()

const {
  getUsers,
  signUp,
  login
} = require("../controller/User")

router.route("/").get(getUsers)
router.route("/register").post(signUp)
router.route("/login").post(login)

module.exports = router