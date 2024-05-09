const userModel = require("../model/model");

const contactController = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    //Validation
    if(!name){
        "Name is Required"
    }
    if(!email){
        "Email is Required"
    }
    if(!phone){
        "Phone Number is Required"
    }
    if(message){
        "Description is Required"
    }

    // Create User
    const user = await new userModel({
        name,
        email,
        phone,
        message
    }).save()

    res.status(200).send({
        success: true,
        message:"Your Response has been stored",
        user
    })

  } catch (error) {
    console.log(error)
    res.status(400).send({
      success: false,
      message: "Error in storing data",
      error,
    });
  }
};

const getContact = async(req,res) =>{
    try {
        const user = await userModel.find({}).sort({createdAt: -1})
        res.status(200).send({
            success:true,
            message:"Contact List",
            user
        })
    } catch (error) {
        console.log(error).send({
            success: false,
            message:"Error while getting data"
        })
    }
}

module.exports = {contactController, getContact}