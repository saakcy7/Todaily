const mongoose = require('mongoose');
const conn = async(req,res)=>{
    try{
        await mongoose.connect('mongodb+srv://kcsakshi92:K_barSdLA4GSzcX@cluster0.5obsf1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
            console.log('Connection to the database is successful');
       })
    } catch(err){
        res.status(400).json({
            message:'Internal Server Error',
    });
}
};
conn();