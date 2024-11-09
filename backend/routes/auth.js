const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
//SIGNIN
router.post("/register",async(req,res)=>{
    try{
        const {email,username,password}=req.body;
        const hashpassword=bcrypt.hashSync(password);
        const user = new User({email,username,password:hashpassword});
        await user.save().then(()=>res.status(200).json({user:user}));
    }catch(error)
    {
        console.log(error);
        res.status(400).json({message:"User already exists"});
    }
});

//SIGNIN
router.post("/signin",async(req,res)=>{
    try{
        const user= await User.findOne({email:req.body.email});
        if(!user)
        {
            return res.status(400).json({message:"Please singup first"});
        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
        if(!isPasswordCorrect)
        {
            return res.status(400).json({message:"Password is incorrect"});
        }
           // Generate a token
           const token = jwt.sign(
            { id: user._id, email: user.email },
            'your_jwt_secret_key', // Replace with your actual secret key
            { expiresIn: '1h' } // Token expires in 1 hour
        );
        const {password,...others}=user._doc;
        return res.status(200).json({...others,token});
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
});

module.exports=router; // This line is added to export the router