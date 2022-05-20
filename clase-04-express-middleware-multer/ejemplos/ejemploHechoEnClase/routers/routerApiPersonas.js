const { Router } = require('express')
const { controladoresApi } = require('./controllers/controladoresApi.js.js')

const routerApiPersonas = new Router()

routerApiPersonas.use(express.json())
routerApiPersonas.use(express.urlencoded({ extended: true }))

routerApiPersonas.get('/api/personas', controladoresApi.getPersonas)
routerApiPersonas.get('/api/personas/:idPersona', controladoresApi.getPersona)
routerApiPersonas.post('/api/personas', controladoresApi.postPersonas)
routerApiPersonas.delete('/api/personas/:idPersona', controladoresApi.deletePersona)
routerApiPersonas.put('/api/personas/:idPersona', controladoresApi.putPersona)

module.exports = { routerApiPersonas }