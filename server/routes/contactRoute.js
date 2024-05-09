const express = require("express")
const {contactController, getContact} = require("../controller/controller")


const router = express.Router()


router.post("/create-contact",contactController)
router.get("/get-contact",getContact)

module.exports = router