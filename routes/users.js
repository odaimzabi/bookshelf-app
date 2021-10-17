const express=require('express')
const app=express.Router()
const mongoose=require('mongoose')

const model=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})

const User=mongoose.model("Users",model)


app.post('/signup',function(req,res){
    const data=req.body
    const doc=new User(data)
    console.log(doc)
    User.findOne({email:data.email},function(err,docs){

            if (err) console.log(err)
            
            if (docs) {
                res.status(500).json({message:"DENIED"})
            
            }else {
            
            res.status(200).json({message:data.firstName+data.lastName});
             doc.save()}

    })
})


app.post('/login',function(req,res){
    const data=req.body
    User.findOne({email:req.body.email},function(err,docs){
        if (err){
            console.log(err)
        }
        if (docs){
            
            res.status(200).json({message:docs.firstName+docs.lastName})
        }else{
            res.status(500).json({message:"User does not exist!"})
        }
    })
})



module.exports=app