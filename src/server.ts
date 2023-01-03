import express from 'express'
import 'express-async-errors'

import logs from './middlewares/logs'
import errors from './middlewares/errors'
import routes from './routes'

const port = process.env.PORT || 8080

const server = express()

server.use(express.json())
server.use(logs)
server.use(routes)
server.use(errors)

server.listen(port, () => {
    console.log (`Servidor rodando na porta ${port}`)
})