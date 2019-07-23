const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

mongoose
    .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(() => console.log('Connected to MONGODB'))
    .catch((error) => console.error(error))

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
    members: [
        {
        name: String,
        isChecked: Boolean
        },
    ],
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