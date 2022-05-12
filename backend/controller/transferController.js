const User = require('../Models/usersModel')
const TransferTable = require('../Models/transferTableModel')
const asyncHandler =require('express-async-handler')
const res = require('express/lib/response')

const updataeBalance = asyncHandler(async(req,res)=>{
    var sender =  await User.findById(req.params.senderid)
    var recevier = await User.findById(req.params.id)
    const amount  = req.params.amount

    var senderNewBalance = sender.current_balance - amount
    var recevierNewBalance = recevier.current_balance+ Number(amount)
   
    if (senderNewBalance < 0){
     res.status(400).send('Your balance does not cover the mount of money you want to Transfer')
    } 
    else{
    const transfertable = await TransferTable.create({
        sender: sender.first_name,
        senderBalanceAfterTransfer : senderNewBalance,
        recevier : recevier.first_name,
        recevierBalanceAfterTransfer : recevierNewBalance,
        amount: amount
    })

    var updateSenderBalance = await User.findByIdAndUpdate(req.params.senderid, {current_balance :senderNewBalance },{new: true})
    var updateRecevierBalance = await User.findByIdAndUpdate(req.params.id,  {current_balance :recevierNewBalance },{new: true})

    res.status(200).send({sender : updateSenderBalance.current_balance ,recevier :updateRecevierBalance.current_balance, amount: amount}) 
    }
})

const showTable = asyncHandler( async(req,res) => {
    TransferTable.find()
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = {
    updataeBalance,
    showTable
}