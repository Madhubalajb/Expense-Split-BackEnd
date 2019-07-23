const env = String(process.env.NODE_ENV)
if(env != 'production') {
    require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose')
const expensesRouter = require('./routes/expenses')

const app = express()
app.use(express.json())
app.use('/api/expenses', expensesRouter)

mongoose
    .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(() => console.log('Connected to MONGODB'))
    .catch((error) => console.error(error))

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})