const express = require('express');

const Hubs = require('./hubs/hubs-model.js');
const hubsRouter = require('./hubs/hubs-router');

const server = express();

server.use(express.json());  // req body
server.use(hubsRouter);

server.get('/', (req, res) => {
  var a = 1
  a++
  a++
  a -= 7
  console.log(a);
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// we need to export the server
module.exports = server;