const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

const webRouter = require('./routers/webRouter.js')
const eventoCnxController = require('./controllers/sockets/socketControllers.js')

app.use(express.static('public'))

app.use('/', webRouter)

io.on('connection', socket => eventoCnxController(socket, io))

const server = httpServer.listen(8080, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})