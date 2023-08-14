const express=require('express')
const api=express()
const mongoose=require('mongoose')
const UserSchema = require('./model/Users')
const bodyparser=require('body-parser')
const userroute=require('./routes/userroute')
const { error } = require('console')


api.use(bodyparser.json())

mongoose.connect('mongodb://127.0.0.1:27017/users')

api.use('/api',userroute)
api.listen(9000,()=>{
    console.log('http://127.0.0.1:9000')
})



