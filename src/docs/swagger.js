const swaggerAutogen = require('swagger-autogen')();

const PORT = process.env.PORT || 8080;
const HOST = process.env.NODE_ENV === 'production'
    ? 'https://cse341-recipes.onrender.com'
    : `localhost:${PORT}`;
const SCHEME = process.env.NODE_ENV === 'production'
    ? 'https'
    : 'http';

const doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    host: HOST,
    schemes: SCHEME
};

const outputFile = './swagger-output.json';
const routes = ['../index.js'];

swaggerAutogen(outputFile, routes, doc);