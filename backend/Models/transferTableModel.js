const mongoose = require ('mongoose')
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
const transferTableSchema = mongoose.Schema({
    sender:{
        type : String,
        required : true,
        ref : 'User'
    },

    senderBalanceAfterTransfer:{
        type: SchemaTypes.Double
    },
    
    recevier:{
        type : String,
        required : true,
        ref : 'User'
    },
    recevierBalanceAfterTransfer:{
        type: SchemaTypes.Double
    },
    amount :{
        type: SchemaTypes.Double
    }

    
})

module.exports = mongoose.model('TransferTable', transferTableSchema)