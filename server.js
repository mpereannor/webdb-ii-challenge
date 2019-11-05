const express = require('express');
const helmet = require('helmet');

const carRouter = require('./cars/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carRouter);

//test server

server.get('/', (req, res) => {
    res.send(`<h1>server working</h1>`)
})
//server.use('/api/cars', carRouter); 

module.exports = server;


