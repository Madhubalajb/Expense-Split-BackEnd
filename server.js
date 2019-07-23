const env = String(process.env.NODE_ENV)
if(env != 'production') {
    require('dotenv').config()
}
console.log(process.env.MONGODB_URI)
const express = require('express')
const cors = require('cors')
const expensesRouter = require('./routes/expenses')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use('/api/expenses', expensesRouter)

app.listen(3001, () => {
    console.log(`Server running on port 3000`);
})