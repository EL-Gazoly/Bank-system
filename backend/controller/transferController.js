const User = require('../Models/usersModel')
const TransferTable = require('../Models/transferTableModel')
const asyncHandler =require('express-async-handler')

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
        sender: req.params.senderid,
        senderBalanceBeforeTransfer : sender.current_balance,
        senderBalanceAfterTransfer : senderNewBalance,
        recevier : req.params.id,
        recevierBalanceBeforeTransfer : recevier.current_balance,
        recevierBalanceAfterTransfer : recevierNewBalance
    })

    var updateSenderBalance = await User.findByIdAndUpdate(req.params.senderid, {current_balance :senderNewBalance },{new: true})
    var updateRecevierBalance = await User.findByIdAndUpdate(req.params.id,  {current_balance :recevierNewBalance },{new: true})

    res.status(200).send({sender : updateSenderBalance.current_balance ,recevier :updateRecevierBalance.current_balance, amount: amount}) 
    }
})

module.exports = {
    updataeBalance
}