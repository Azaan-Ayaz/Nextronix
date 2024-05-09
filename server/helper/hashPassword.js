const bcryptjs = require("bcryptjs");

const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcryptjs.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
        throw new Error("Error hashing password");
    }
};

const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcryptjs.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
        throw new Error("Error comparing passwords");
    }
};

module.exports = { hashPassword, comparePassword };
