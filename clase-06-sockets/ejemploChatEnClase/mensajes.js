const mensajes = [
    // {
    //     autor: 'pepe',
    //     texto: 'hola'
    // },
    // {
    //     autor: 'lala',
    //     texto: 'chau'
    // }
]

function obtenerMensajes() {
    return mensajes
}

function guardarMensaje(mensaje) {
    mensajes.push(mensaje)
}

module.exports = {
    obtenerMensajes, guardarMensaje
}