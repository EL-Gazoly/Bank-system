const express = require('express');
const connectDB = require('./config/db')
const colors =require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const path = require('path');
const app = express()

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

connectDB()



app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/transfer',require('./routes/transferRoutes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}
 
app.listen(process.env.PORT || 8080)