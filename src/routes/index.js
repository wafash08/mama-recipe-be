const express = require('express')
const route = express.Router()
const recipeRoute = require('./recipes')
const authRoute = require('./auth')
const userRoute = require('./users')

route
    .use('/recipes', recipeRoute)
    .use('/auth', authRoute)
    .use('/users', userRoute)

module.exports = route