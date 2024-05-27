const express = require('express')
const { getRecipes, getRecipesById, updateRecipe, createRecipe, deleteRecipe, getAllMyRecipe } = require('../controllers/recipes')
const { protect } = require('../middlewares/auth')
const route = express.Router()
route
    .get('/', getRecipes)
    .get('/self', protect, getAllMyRecipe)
    .get('/:id', getRecipesById)
    .put('/:id', updateRecipe)
    .post('/', protect, createRecipe)
    .delete('/:id', deleteRecipe)

module.exports = route