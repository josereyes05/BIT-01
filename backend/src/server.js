const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routers/userRoutes')


const server = express()
const port = 5000

server.set('port', port)

server.use(morgan('dev'))
server.use(express.json())

server.use('/users/', userRoutes);

server.get('/', (require, response) => {
    // el '/' es pa que corra en la carpeta Backend :)
    response.send('Works!');
})

module.exports = server;