// const { number } = require('joi')
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    image:String,
    category:String
})

module.exports = mongoose.model("products",ProductSchema)
