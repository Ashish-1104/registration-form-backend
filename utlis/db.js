const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to db");
    }
    catch (error) {
        console.log("DB fail");
        process.exit(0);
    }
};


module.exports = { connectDB }
