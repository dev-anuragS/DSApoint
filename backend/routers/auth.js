const express=require('express')
const { register, login, profile } = require('../controllers/auth')
const router=express.Router()

router.post('/register',register)

router.post('/login',login)

router.get('/profile',profile)

// router.post('/profile',pro)

module.exports=router
