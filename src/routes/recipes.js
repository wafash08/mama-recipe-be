const express = require('express')
const { getRecipes, getRecipesById, updateRecipe, createRecipe, deleteRecipe, getAllMyRecipe, getAllSaveRecipe, saveRecipe, removeRecipeSave, getAllLikeRecipe, likeRecipe, removeRecipeLike } = require('../controllers/recipes')
const { protect } = require('../middlewares/auth')
const route = express.Router()
route
    .get('/', getRecipes)
    .get('/self', protect, getAllMyRecipe)
    .get('/save', protect, getAllSaveRecipe)
    .get('/like', protect, getAllLikeRecipe)
    .get('/:id', getRecipesById)
    .put('/:id', updateRecipe)
    .post('/', protect, createRecipe)
    .post('/save', protect, saveRecipe)
    .post('/like', protect, likeRecipe)
    .delete('/save/:id', protect, removeRecipeSave)
    .delete('/like/:id', protect, removeRecipeLike)
    .delete('/:id', deleteRecipe)

module.exports = route