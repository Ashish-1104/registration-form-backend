const {User} = require("../models/user-model")
const bcrypt= require("bcryptjs")

const home = async (req,res) => {
    try{
        console.log("run router");
        res.status(200).send("Welcome router via controller");
    }
    catch(error){
        console.log(error);
    }
};

const register = async(req,res)=>{
    try{
        const newData= req.body;
        userExist = await User.findOne({email:newData.email});
        if(userExist){
            return res.status(400).json({msg:"User already exist."})
        } 
       const reg= await User.create(newData)
        console.log(reg);
        // res.status(200).json({message: req.body});
        if(reg) res.json(reg);
        else res.send("register fail")
    }
    catch(error){
        console.log(error);
    }
}


const login = async (req,res)=>{
    try {
        const userData= req.body;
        userExist = await User.findOne({email:userData.email});
        if(!userExist)
        {
            return res.status(400).json({msg:"Invalid credentials"});
        }
        const passvalid = await bcrypt.compare(userData.password,userExist.password);
        if(passvalid)
        {
            console.log(userExist)
           res.json(userExist);
        }
        else{
            res.status(401).json({msg:"invalid email or password"})
        }
    }
    catch(error){
        console.log(error);
    }
};
module.exports= {home,register,login}