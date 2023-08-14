const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    // cart:[],
    // wishlist:[],
    // orders:[],
})

module.exports = mongoose.model("users",UserSchema)