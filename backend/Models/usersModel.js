const mongoose = require ('mongoose')
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    gender:{
        type:String,
    },
    current_balance:{
        type: SchemaTypes.Double 
    }

})

module.exports = mongoose.model('User',userSchema)