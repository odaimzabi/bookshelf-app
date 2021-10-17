const express=require('express')
const morgan=require('morgan')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

mongoose.connect('mongodb+srv://odaim:helloworld@cluster0-lulik.mongodb.net/odaim?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},()=>console.log("connected to mongodb"));


app.use('/',require("./routes/index"))
app.use('/api',require("./routes/users"))

app.listen(8080,()=>console.log("Server is running on 8080..."))