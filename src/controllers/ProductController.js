const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query  
        const products = await Product.paginate({}, { page, limit: 2 });  //define limite pages and limite for pages

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
        try {
            const product = await Product.findById(req.params.id) //search for products id
            return res.json(product)

        } catch (error) {
            return res.send("Register not found")
        }
    },

    async update(req, res) {
        try {

            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })  //new = true , for get new product
            return res.json(product)

        } catch (error) {
            console.log(error)
        }
    },

    async destroy(req, res) {
        try {

            const product = await Product.findByIdAndRemove(req.params.id) //search for products id
            return res.send();

        } catch (error) {
            console.log(error)
        }
    },

}