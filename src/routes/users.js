const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const { protect } = require('../middlewares/auth')

router.get('/profile',protect , userController.profile)

module.exports = router