const express = require('express');
const helmet = require('helmet');

//const carRouter = require('../router.js');

const server = express();

server.use(helmet());


//test server 
server.get('/', (req, res) => {
    res.send(`<h1>server working</h1>`)
})
//server.use('/api/cars', carRouter); 

module.exports = server;


