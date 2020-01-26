const expensesRouter = require('express').Router()
const Expense = require('../models/expense')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

//Getting all
expensesRouter.get('/', async(request, response) => {
    try {
        const expenses = await Expense.find({}).populate('user', {username: 1, name: 1})
        //populating user - 'user' is a field in Expense model.
        response.json(expenses.map(expense => expense.toJSON()))
    } catch(error) {
        response.status(500).json({message: error.message})
    }
})

//Getting one
expensesRouter.get('/:id', getExpense, (request, response) => {
    response.json(response.expense)
})

//Creating one
expensesRouter.post('/', async(request, response) => {
    const body = request.body
    console.log(request.token)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if(!request.token || !decodedToken.id) {
        return response.status(401).json({error: 'Token missing or invalid'})
    }

    const user = await User.findById(decodedToken.id)

    const newExpense = new Expense({
        expense_name: body.expense_name,
        date: body.date,
        amount: body.amount,
        by_whom: body.by_whom,
        members: body.members,
        user: user._id
    })

    try {
        const savedExpense = await newExpense.save()
        user.expenses = user.expenses.concat(savedExpense._id)
        await user.save()
        response.status(201).json(savedExpense)
    } catch(error) {
        response.status(400).json({message: error.message})
    }
})

//updating one
expensesRouter.patch('/:id', getExpense, async(request, response) => {
    const body = request.body

    if(body.expense_name != null)
        response.expense.expense_name = body.expense_name
    try {
        const updatedExpense = await response.expense.save()
        response.json(updatedExpense)
    } catch(error) {
        response.status(400).json({message: error.message})
    }
})

//Deleting one
expensesRouter.delete('/:id', getExpense, async(request, response) => {
    try{
        await response.expense.remove()
        response.json({message: 'Deleted Expense'})
    } catch(error) {
        response.status(500).json({message: error.message})
    }
})

async function getExpense(request, response, next) {
    let expense
    try {
        expense = await Expense.findById(request.params.id)
        if(expense == null) {
            return response.status(404).json({message: 'Cannot find Expense'})
        }
    } catch(error) {
        return response.status(500).json({message: error.message})
    }
    response.expense = expense
    next()
}
 
module.exports = expensesRouter