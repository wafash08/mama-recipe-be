const express = require('express')
const { getRecipes, getRecipesById, updateRecipe, createRecipe, deleteRecipe } = require('../controllers/recipes')
const route = express.Router()
route
    .get('/', getRecipes)
    .get('/:id', getRecipesById)
    .put('/:id', updateRecipe)
    .post('/', createRecipe)
    .delete('/:id', deleteRecipe)

module.exports = route