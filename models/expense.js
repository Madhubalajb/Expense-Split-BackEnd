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

expenseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('expense', expenseSchema)