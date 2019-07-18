const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    expense_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    by_whom: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('expense', expenseSchema)