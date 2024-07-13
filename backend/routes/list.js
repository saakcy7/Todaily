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

//delete
router.delete("/deleteTask/:id",async(req,res)=>{
    try{
        const {email}=req.body;
        const existingUser=await User.findOneAndUpdate({email},{$pull:{list:req.params.id}}

        );//checks if the user exists
        if(existingUser)
        {
            await List.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({message:"Task deleted"}));
            
        }
    }
    catch(error){
        console.log(error);

    }
});

//getTask
router.get("/getTasks/:id",async(req,res)=>{
    try{
       const list= await List.find({user:req.params.id});
       res.status(200).json({list:list});
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:"Internal Server Error"});
    }
});


module.exports=router;