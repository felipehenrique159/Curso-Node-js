const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const app = express()

app.listen(3000)

//init mongo database

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})

requireDir("./src/models")

const Product = mongoose.model('Product')


app.get("/" , (req,res) =>{
    Product.create({
        title: 'React native',
        description: 'React native curse',
        url:'www.google.com'
    })
    return res.send("Hello World")
})