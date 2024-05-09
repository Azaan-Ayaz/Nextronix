const mongoose = require('mongoose');
const colors = require('colors');

const dataBase = async () => {
    try {
        await mongoose.connect('mongodb+srv://azaan:azaan@cluster0.deanbuu.mongodb.net/Nectronix');
        console.log('Database is connected to server'.bgGreen.black);
    } catch (error) {
        console.log({
            message: "DataBase is not connected".bgRed.black,
            error: error
        });
    }
}

module.exports = dataBase;
