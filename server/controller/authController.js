const authModel = require("../model/authModel");
const { hashPassword, comparePassword } = require("../helper/hashPassword");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
// const userModel = require("../model/model");
dotenv.config();

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    // Check if the user already exists
    const existingUser = await authModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered. Please login.",
      });
    }

    // Hash Password
    const hashedPassword = await hashPassword(password);

    // Save User
    const newUser = new authModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while registering user",
      error: error.message,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email & password",
      });
    }

    // Check if the user exists or not
    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Email is not registered",
      });
    }

    // Check the Password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate JWT token
    const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
      },
      token
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getUser = async(req,res)=>{
    try {
        const data = await authModel.find({})
        const userData = data.map(user => ({
            name: user.name,
            email: user.email
        }))
        res.status(200).send({
            success: true,
            message:"Registed Users",
            data: userData
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message:"Something went wrong",
            error
        })
    }
}

module.exports = { registerController, loginController, getUser};
