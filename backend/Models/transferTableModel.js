const mongoose = require ('mongoose')
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
const transferTableSchema = mongoose.Schema({
    sender:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
     senderBalanceBeforeTransfer:{
        type: SchemaTypes.Double
    },
    senderBalanceAfterTransfer:{
        type: SchemaTypes.Double
    },
    
    recevier:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },

    recevierBalanceBeforeTransfer:{
        type: SchemaTypes.Double
    },
    recevierBalanceAfterTransfer:{
        type: SchemaTypes.Double
    }

    
})

module.exports = mongoose.model('TransferTable', transferTableSchema)