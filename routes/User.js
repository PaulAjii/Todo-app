const router = require("express").Router()

const {
  getUsers,
  signUp
} = require("../controller/User")

router.route("/").get(getUsers)
router.route("/register").post(signUp)

module.exports = router