const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views' })
})

app.get('/molestar', (req, res) => {
    io.sockets.emit('JAJA!')
    res.sendStatus(204)
})

io.on('connection', socket => {
    console.log('alguien se conectó')
    socket.emit('cnxOk', { fecha: new Date().toLocaleString() })
    socket.on('ping', () => {
        console.log(`socket '${socket.id}' dice PING`)
    })
})

const server = httpServer.listen(8080, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})