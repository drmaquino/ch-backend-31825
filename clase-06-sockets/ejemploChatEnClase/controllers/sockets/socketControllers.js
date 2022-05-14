const { obtenerMensajes, guardarMensaje } = require('../../mensajes.js')

function eventoCnxController(socket, io) {
    const mensajes = obtenerMensajes()
    socket.emit('mensajes', { mensajes })
    socket.on('mensaje', mensaje => eventoMensajeController(socket, io, mensaje))
}

function eventoMensajeController(socket, io, mensaje) {
    guardarMensaje(mensaje)
    const mensajes = obtenerMensajes()
    io.sockets.emit('mensajes', { mensajes })
}

module.exports = eventoCnxController