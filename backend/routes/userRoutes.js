const express = require('express')
const User = require('../Models/usersModel')
const {getAllUser,getUserWithId } = require('../controller/userController')
const router = express.Router()


router.get('/all',getAllUser)

router.get('/:id',getUserWithId)




module.exports=router