var UserSchema = require('../model/Users')
var jwt=require('jsonwebtoken')
var ProductSchema=require("../model/Product")

module.exports ={
    register: async (req,res) =>{
        const {username,email,password}= await req.body
        await UserSchema.create({
           username: username,
           email: email,
           password: password,
           cart:[],
           wishlist:[],
           orders:[],
        })
        res.json('ok')
    },
    login: async (req,res) =>{
        const {email,password} = await req.body
        const user=await UserSchema.find({email:email,password:password})
        if(user.length !=0){
            let resp={
                id: user[0].id,
            }
            let token=jwt.sign(resp,'unique')
            res.send({auth:true,token:token})
        }
        else{
            res.json(" User Not Found")
        }
    },
    products: async (req,res)=>{
        res.json(await ProductSchema.find())
    },
    productsbyid: async(req,res)=>{
       const product= await ProductSchema.find({_id:req.params.id})
       if(product.length !=0){
        res.json(product)
       }else{
        res.json('product not available')
       }
    },
    productsbycategory: async (req,res)=>{
        const category = await ProductSchema.find({category:req.params.categoryname})
        console.log(category)
        if(category.length !=0){
            res.json(category)
        }else{
            res.json('No product in this category')
        }
    },
    cart:async (req,res)=>{
        
    }

}