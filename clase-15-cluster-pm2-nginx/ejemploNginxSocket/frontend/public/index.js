const socket = io('http://localhost')

document.querySelector('button').addEventListener('click', e => {
    socket.emit('msg', document.querySelector('input').value)
})

socket.on('msg', msg => {
    document.querySelector('p').innerHTML = `mensaje: ${msg}`
})