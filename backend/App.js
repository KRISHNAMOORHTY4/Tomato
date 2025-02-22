const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require('cors')

const port=3002
const Router=require('./FoodRouter')
mongoose.connect("mongodb://127.0.0.1:27017/food")
app.use(express.json())
app.use(cors())
app.use(Router)


app.listen(port,()=>{
    console.log(`server run on ${port}`);
    
})