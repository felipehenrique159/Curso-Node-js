const express = require('express')   //imports
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)  //route products


module.exports = routes