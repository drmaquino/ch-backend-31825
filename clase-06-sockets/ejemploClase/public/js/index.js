const socket = io()

socket.on('cnxOk', data => {
    console.log(data)
})

socket.on('JAJA!', () => {
    const msg = 'el servidor esta aburrido y te esta molestando'
    const p = document.getElementById('encabezado')
    p.innerHTML = msg
})

const btn = document.getElementById('btn__ping')
btn.addEventListener('click', event => {
    socket.emit('ping')
})