const express = require('express');
const connectDB = require('./config/db')
const colors =require('colors')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

connectDB()



app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/transfer',require('./routes/transferRoutes'))

app.listen(process.env.PORT)