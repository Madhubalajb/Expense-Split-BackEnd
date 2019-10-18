const express = require('express')
const router = express.Router()
const Expense = require('../models/expense')

//Getting all
router.get('/', async(request, response) => {
    try {
        const expenses = await Expense.find()
        response.json(expenses)
    } catch(error) {
        response.status(500).json({message: error.message})
    }
})

//Getting one
router.get('/:id', getExpense, (request, response) => {
    response.json(response.expense)
})

//Creating one
router.post('/', async(request, response) => {
    const expense = new Expense({
        expense_name: request.body.expense_name,
        date: request.body.date,
        amount: request.body.amount,
        by_whom: request.body.by_whom,
        members: request.body.members
    })
    try {
        const newExpense = await expense.save()
        response.status(201).json(newExpense)
    } catch(error) {
        response.status(400).json({message: error.message})
    }
})

//updating one
router.patch('/:id', getExpense, async(request, response) => {
    if(request.body.expense_name != null)
        response.expense.expense_name = request.body.expense_name
    try {
        const updatedExpense = await response.expense.save()
        response.json(updatedExpense)
    } catch(error) {
        response.status(400).json({message: error.message})
    }
})

//Deleting one
router.delete('/:id', getExpense, async(request, response) => {
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

module.exports = router