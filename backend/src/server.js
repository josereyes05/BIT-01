const express = require('express')
const morgan = require('morgan')


const server = express()
const port = 4000

server.set('port', port)

server.get(morgan('dev'))

server.get('/', (require, response) => {
    // el '/' es pa que corra en la carpeta Backend :)
    response.send('Works!');
})

module.exports = server;