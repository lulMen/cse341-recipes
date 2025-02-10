const { default: mongoose } = require('mongoose');
const Recipe = require('../models/recipeSchema');

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(600).json({ error: err.message });
    }
};

const getRecipeById = async (req, res) => {
    try {
        const recipeId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(recipeId)) {
            return res.status(400).json({ error: 'Invalid recipe ID format' });
        }

        const recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateRecipe = async (req, res) => {
    try {
        const recipeId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(recipeId)) {
            return res.status(400).json({ error: 'Invalid recipe ID format' });
        }

        const updates = req.body;
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            recipeId,
            updates,
            { new: true }
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(204).json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const recipeId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(recipeId)) {
            return res.status(400).json({ error: 'Invalid recipe ID format' });
        }

        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
};