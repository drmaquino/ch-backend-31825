const { Router } = require('express')

const { middlewareDeMuchosArchivos, middlewareDeUnArchivo } = require('../middleware/manejoDeArchivos.js')
const { postArchivoController, postArchivosController } = require('../controllers/archivosControllers.js')

const archivosRouter = new Router()

archivosRouter.post('/uploadfile', middlewareDeUnArchivo, postArchivoController)
archivosRouter.post('/uploadfiles', middlewareDeMuchosArchivos, postArchivosController)

module.exports = { archivosRouter }
