const express = require('express')
const { login, register, logout } = require('../controllers/auth')
const route = express.Router()

route
    .post('/login', login)
    .post('/register', register)
    .get('/logout', logout)


module.exports = route