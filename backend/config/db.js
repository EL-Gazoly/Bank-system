const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://elgazoly:elgazoly11@projectscluster.zh7z2.mongodb.net/bankSystem?retryWrites=true&w=majority" , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    
    }catch(error) {
        console.log(error)
    }
} 
module.exports = connectDB 