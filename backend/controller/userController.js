const User = require('../Models/usersModel')
const asyncHandler = require('express-async-handler')

const getAllUser = asyncHandler(async(req,res) =>{
    User.find()
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

const getUserWithId = asyncHandler(async(req,res) => {
    User.findById(req.params.id)
    .then((result) => {
        res.status(200).send(result)
    })
    .catch( (err) => {
        res.status(400)
        throw new Error('User not found')
    })
})

module.exports = {
    getAllUser,
    getUserWithId
}
