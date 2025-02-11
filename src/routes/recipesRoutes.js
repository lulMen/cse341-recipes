/**
 * @swagger
 * /recipes:
 *   post:
 *     summary: Create a new recipe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *               instructions:
 *                 type: string
 *     responses:
 *       201:
 *         description: Recipe created successfully
 *       400:
 *         description: Invalid input data
 */

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