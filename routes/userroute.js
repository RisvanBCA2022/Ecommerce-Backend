var express=require('express')
var userRouter=express.Router()
var controller= require('../controllers/user')
var jwt=require('../middleware/jwt')


userRouter.post('/users/register',controller.register)
userRouter.post('/users/login',controller.login)
userRouter.get('/users/products',controller.products)
userRouter.get('/users/products/:id',controller.productsbyid)
userRouter.get('/users/products/category/:categoryname',controller.productsbycategory)
userRouter.post('/users/:id/cart',controller.cart)



module.exports=userRouter