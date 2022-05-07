const http = require('http')

function controlador(peticion, respuesta) {
  console.log(`[${peticion.method}] ${peticion.url}`)
  if (peticion.method === 'GET' && peticion.url === '/') {
    respuesta.end('<h1>Hola mundo</h1>')
  } else if (peticion.method === 'GET' && peticion.url === '/personas') {
    respuesta.end('<h1>Personas</h1>aca van las personas')
  } else {
    respuesta.end('404 - NOT FOUND!')
  }
}

const server = http.createServer(controlador)

const connectedServer = server.listen(8080, () => {
  console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})

connectedServer.on('error', manejadorDeErrores)

function manejadorDeErrores(error) {
  console.log(error)
}