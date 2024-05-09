const express = require('express')
const app = express()
const colors = require('colors')
const dataBase = require('./dataBase/DB')
const dotenv = require('dotenv').config()
// const router = require("./controller/controller")
// const { router } = require('./routes/contactRoute')
const router = require('./routes/contactRoute')
const cors = require('cors')
const authRoute = require("./routes/authRoute")
const nexRouter = require("./routes/nexRoute")
// const socket  = require('socket.io')

dataBase()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send({
        message:"Hello World"
    })
})

app.use("/",router)
app.use("/",authRoute)
app.use("/",nexRouter)

PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.clear()
    console.log(`Server is running on port ${PORT}`.bgGreen.black)
})