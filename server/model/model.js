const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    message:{
        type:String,
        required: true
    }
},{timestamps:true})

const userModel = new mongoose.model("contact",userSchema)

module.exports = userModel