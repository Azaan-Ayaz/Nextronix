const nexModel = require("../model/nexModel");
const { hashPassword, comparePassword } = require("../helper/hashPassword");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const nexRegisterController = async (req, res) => {
  try {
    const { name, email, password, phone, city, country } = req.body;

    // Validation
    if (!name) {
      return res.status(400).send("Name is required");
    }
    if (!email) {
      return res.status(400).send("Email is required");
    }
    if (!password) {
      return res.status(400).send("Password is required");
    }
    // // if (!phone) {
    // //   return res.status(400).send("Contact number is required");
    // }
    if (!city) {
      return res.status(400).send("City is required");
    }
    if (!country) {
      return res.status(400).send("Country is required");
    }

    // Checking Email is Already Exist
    const existingEmail = await nexModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).send({
        succes: false,
        message: "User already registed. Please login",
      });
    }

    // Hashing password
    const hashingPassword = await hashPassword(password);

    // Save the new user
    const newOne = new nexModel({
      name,
      email,
      password: hashingPassword,
      city,
      country,
      phone,
    });
    await newOne.save();
    res.status(200).send({
      success: true,
      message: "User Registed Successfully",
      newOne,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      succes: false,
      message: "Internal Server Error",
    });
  }
};

// Login
const nexLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid Email & Password",
      });
    }

    // Check if the user is registered or not
    const user = await nexModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Email is not registered",
      });
    }

    // Check the password
    const passwordValid = await comparePassword(password, user.password);
    if (!passwordValid) {
      return res.status(400).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const nexToken = await JWT.sign(
      { _id: user._id },
      process.env.NECTRONIX_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
      },
      nexToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const allUser = async(req,res)=>{
try {
    const info = await nexModel.find({})
    const userInfo = info.map(item=>({
        name: item.name,
        email: item.email
    }))
    res.status(200).send({
        succes: true,
        message:"All Users",
        data: userInfo
    })
} catch (error) {
console.error(error)    
}    
}

module.exports = { nexRegisterController, nexLoginController, allUser };
