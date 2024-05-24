const express = require('express')
const route = express.Router()
const recipeRoute = require('./recipes')
const authRoute = require('./auth')

route
    .use('/recipes', recipeRoute)
    .use('/auth', authRoute)

module.exports = route