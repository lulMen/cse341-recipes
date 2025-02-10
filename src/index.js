require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../src/docs/swagger-output.json');

const routerIndex = require('./routes/index');
const routerRecipes = require('./routes/recipesRoutes');
const routerUsers = require('./routes/recipeUsersRoutes');

const PORT = process.env.PORT || 8080;
const app = express();

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/', routerIndex)
    .use('/recipes', routerRecipes)
    .use('/users', routerUsers)
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB using Moongoose');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.log(`Database connection error: ${err.message}`);
        process.exit(1);
    }
};

startServer();