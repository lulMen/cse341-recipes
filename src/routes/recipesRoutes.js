const express = require('express');
const {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
} = require('../controllers/recipesController');

const Router = express.Router();

Router
    .get('/', getAllRecipes)
    .get('/:id', getRecipeById)
    .put('/:id', updateRecipe)
    .delete('/:id', deleteRecipe)
    .post('/', createRecipe);

module.exports = Router;