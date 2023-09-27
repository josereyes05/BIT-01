const server = require('./server')
require('dotenv').config()

require('./database')
const port = server.get('port')

server.listen(port, () => console.log(`Server corriendo en el puerto ${port}`))