const socket = io()

socket.on('mensajes', ({ mensajes }) => {
    console.log(mensajes)
    mostrarMensajes(mensajes)
})

const btn = document.getElementById('btn_enviar')
btn.addEventListener('click', event => {
    const autor = document.getElementById('inputAutor').value
    const texto = document.getElementById('inputTexto').value
    socket.emit('mensaje', { autor, texto })
})

function buscarPlantilla(url) {
    return fetch(url).then(res => res.text())
}

function armarHtmlRemoto(url, contexto) {
    buscarPlantilla(url).then(plantilla => {
        const generarHtml = Handlebars.compile(plantilla);
        return generarHtml(contexto)
    })
}

async function armarListaDesordenada(mensajes) {
    const contexto = { mensajes }
    return armarHtmlRemoto('templates/chat.hbs', contexto)
}

async function mostrarMensajes(mensajes) {
    const divMensajes = document.getElementById('mensajes')
    const lineasMensajes = mensajes.map(o => `${o.autor}: ${o.texto}`)
    divMensajes.innerHTML = await armarListaDesordenada(mensajes)
}