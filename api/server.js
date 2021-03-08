const express = require('express');
const server = express();
const cors = require("cors");
const usersRouter = require('../users/users-router');
const classesRouter = require('../classes/classes-router');
const categoriesRouter = require('../categories/categories-router');

server.use(cors())
server.use(express.json())
server.use(usersRouter)
server.use(classesRouter)
server.use(categoriesRouter)

server.get('/', async (req, res) => {
    res.status(200).json({ status: 'api still working'})
})
module.exports = server;