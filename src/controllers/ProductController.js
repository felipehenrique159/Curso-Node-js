const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {

    async index(req, res) {
        const products = await Product.find();  //return all products

        return res.json(products)

    }, 
 
    async store(req, res) {

        try {
            const product = await Product.create(req.body) //body requisition

            return res.json(product) //return json

        } catch (error) {
            console.log(error)
        }
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id) //search for products id
        return res.json(product)
    },

    async update(req, res) {
        try {

            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })  //new = true , for get new product
            return product

        } catch (error) {
            console.log(error)
        }
    },
}