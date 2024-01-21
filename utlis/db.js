const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
console.log(URI)
console.log(process.env.A)
// const URI = "mongodb+srv://ashish:MYmongodb@cluster0.b2r09wv.mongodb.net/register_data?retryWrites=true&w=majority";
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