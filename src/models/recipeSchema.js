const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    difficultyLevel: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'recipeUsers' }
});

module.exports = mongoose.model('recipe', recipeSchema);