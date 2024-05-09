const mongoose = require("mongoose")

const nexSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        // required: true
    }
})

const nexModel = mongoose.model("Nectronix-SignUp", nexSchema) 

module.exports = nexModel