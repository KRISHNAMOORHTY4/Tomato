const express=require("express")
const Router =express.Router()
const FoodSchema=require('./Foodschema')

Router.post("/addfood",async(req,res)=>{
    try{
        const newfood = await new FoodSchema({
            Foodname:req.body.name,
            quantity:req.body.quantity
        })
        const total=await newfood.save()
        if(total){
            res.json("Added")
        }
        else{
            res.json("error")
        }
    }
    catch(err){
        res.status(400).json(err.message)
    }
})
Router.get("/getall",async(req,res)=>{
  try{
    const getdata=await FoodSchema.find()
    if(getdata){
     res.json(getdata)
    }
    else{
     res.status(400).json("error")
    }
  }
  catch(err){
    res.status(400).json(err.message)
  }
})
Router.get("/kk",(req,res)=>{
    res.json("hiii")
})
Router.patch('/patch',async(req,res)=>{
   try{
    const updatevalue=await FoodSchema.updateOne({_id:req.body.id},{$set:{quantity:req.body.number}})
    if(updatevalue){
        res.json(updatevalue)
    }
   }
   catch(err){
    res.status(400).json(err.message)
   }
})




module.exports=Router