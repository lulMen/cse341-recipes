const express = require('express');
const {
    sayHello
} = require('../controllers/index');

const Router = express.Router();

Router
    .get('/', sayHello);

module.exports = Router;