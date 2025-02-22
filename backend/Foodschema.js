const mongoose=require("mongoose")
const schema=mongoose.Schema({
    Foodname:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
        
        
    }
    
})
module.exports=mongoose.model("name",schema)