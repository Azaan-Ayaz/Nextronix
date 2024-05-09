const express = require("express")
const {allUser, nexLoginController, nexRegisterController} = require("../controller/nexController")

const nexRouter = express.Router()

nexRouter.post("/create-nexUser",nexRegisterController)
nexRouter.post("/nex-login",nexLoginController)
nexRouter.get("/nex",allUser)

module.exports = nexRouter