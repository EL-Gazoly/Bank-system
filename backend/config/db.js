const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    
    }catch(error) {
        console.log(error)
    }
} 
module.exports = connectDB 