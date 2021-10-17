const express=require('express')
const app=express.Router()
const mongoose=require('mongoose')


app.get('/',function(req,res){
    res.send("homepage")
})

module.exports=app