const express = require('express')
const { login, register } = require('../controllers/auth')
const route = express.Router()

route
    .post('/login', login)
    .post('/register', register)

module.exports = route