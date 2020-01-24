const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
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
    members: [
        {
        name: String,
        isChecked: Boolean
        },
    ],
    by_whom: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

expenseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense