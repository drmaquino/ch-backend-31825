function postArchivoController(req, res) {
    const file = req.file
    if (!file) {
        res.status(400).json({
            mensaje: 'falta el archivo'
        })
    } else {
        res.send(file)
    }
}

function postArchivosController(req, res) {
    const files = req.files
    if (!files || files.length === 0) {
        res.status(400).json({
            mensaje: 'faltan los archivos'
        })
    } else {
        res.send(files)
    }
}

module.exports = {
    postArchivoController,
    postArchivosController
}