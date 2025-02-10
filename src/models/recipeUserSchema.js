const mongoose = require('mongoose');

const recipeUserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
        unique: true,
    },
    password: { type: String, required: true }
},
    { timestamps: true });

module.exports = mongoose.model('recipeUsers', recipeUserSchema);