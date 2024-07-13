const router=require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//create
router.post("/addTask",async(req,res)=>{
    try{
        const {title,body,email}=req.body;
        const existingUser=await User.findOne({email});//checks if the user exists
        if(existingUser)
        {
            const list = new List({title,body,user:existingUser._id});
            await list.save().then(()=>res.status(200).json({list}));
            existingUser.list.push(list);
            existingUser.save();
        }
    }catch(error){
        console.log(error);
        res.status(400).json({message:"Internal Server Error"});
    }
});

//update
router.put("/updateTask/:id",async(req,res)=>{
    try{
        const {title,body,email}=req.body;

        const existingUser=await User.findOne({email});//checks if the user exists
        if(existingUser)
        {
           const list = await List.findByIdAndUpdate(req.params.id,{title,body});
           list.save().then(()=>res.status(200).json({message:"Task updated"}));
        }
    }catch(error){
        console.log(error);
        res.status(400).json({message:"Internal Server Error"});
    }
});

module.exports=router;