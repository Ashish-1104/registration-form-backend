const mongoose = require("mongoose");

const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
    },
    roll: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

userSchema.pre('save',async function(){
    console.log("pre method",this)
    const user= this;
    if(!user.isModified('password')){
        console.log("No Update");
        next();
    }
    
        try{
        const saltRound= await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
        console.log(user.password, hash_password)    
    }
        catch(error){
            console.log(error+"  password error");
        }
    
})
const User = new mongoose.model("User",userSchema);

module.exports = {User};