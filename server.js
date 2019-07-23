const env = String(process.env.NODE_ENV)
if(env != 'production') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const expensesRouter = require('./routes/expenses')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use('/api/expenses', expensesRouter)

const PORT = process.env.PORT
app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`);
})