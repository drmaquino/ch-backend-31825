const express = require('express')
const app = express()

const { archivosRouter } = require('./routers/archivosRouter.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', archivosRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))