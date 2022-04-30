const express = require('express')
const { Router } = express.Router
const { controladoresApi } = require('./controllers/controladoresApi.js')
const { controladoresWeb } = require('./controllers/controladoresWeb.js')

const { routerApiPersonas } = require('./routers/routerApiPersonas.js')

const app = express()

// app.use(express.static())

//============================================

const routerWeb = new Router()

routerWeb.get('/', controladoresWeb.root)
routerWeb.get('/inicio', controladoresWeb.inicio)
routerWeb.get('/perfil', controladoresWeb.perfil)

app.use(routerWeb)

//============================================

app.use(routerApiPersonas)

//============================================

const routerApiOtros = new Router()

routerApiOtros.get('/api/info', controladoresApi.getInfo)
routerApiOtros.get('/api/profes', controladoresApi.getProfes)

app.use(routerApiOtros)

//============================================

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })
