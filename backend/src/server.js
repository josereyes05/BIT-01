const express = require('express')

const server = express()
const port = 6969

server.get('/', (require, response) => {
    // el '/' es pa que corra en la carpeta Backend :)
    response.send('Works!');
})

server.listen(port, () => console.log(`Server corriendo en el puerto ${port}`))

module.exports = server;