const express = require("express")
const {registerController, loginController, getUser} = require("../controller/authController")

const authRoute = express.Router()

authRoute.post("/create-user",registerController)
authRoute.post("/login",loginController)
authRoute.get("/get-user",getUser)

module.exports = authRoute