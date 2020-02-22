const express = require('express')
const routes = express.Router();

routes.get("/" , (req,res) =>{
    // Product.create({
    //     title: 'React native',
    //     description: 'React native curse',
    //     url:'www.google.com'
    // })
    return res.send("Hello World")
})



module.exports = routes