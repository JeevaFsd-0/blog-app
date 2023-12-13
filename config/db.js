const mongoose = require("mongoose");

const url = "mongodb+srv://rpjeeva17:Jeeva2001@mern.xgvjclf.mongodb.net/";

const connectDb = async () => {
    try {
        const con = await mongoose.connect(url);
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDb;