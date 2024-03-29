require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000
app.use(express.static('client/build'))
app.get("*",(req,res)=>{
       res.sendFile(path.join(__dirname,'client','build','index.html'))
})
app.listen(PORT,()=>{
    console.log(`server runnig successfull at ${PORT}`)
})