const express = require('express');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/recipeUsersController');

const Router = express.Router();

Router
    .get('/', getAllUsers)
    .get('/:id', getUserById)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser)
    .post('/', createUser);

module.exports = Router;