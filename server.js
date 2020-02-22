const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.listen(3000)

//init mongo database

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})

//require('./src/models/Product');


app.get("/" , (req,res) =>{
    return res.send("Hello World")
})