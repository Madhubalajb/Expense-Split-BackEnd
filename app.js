const config = require('./utils/config')
const expensesRouter = require('./controllers/expenses')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

console.log(`Connection to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, {})
    .then(() => {
        console.log('Connected to MONGODB')
    })
    .catch(error => {
        console.log(`Error in connection to MONGODB: ${error.message}`)
    })

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use('/api/expenses', expensesRouter)

module.exports = app