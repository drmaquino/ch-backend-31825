const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

const middlewareDeUnArchivo = upload.single('myFile')
const middlewareDeMuchosArchivos = upload.array('myFiles')

module.exports = {
    middlewareDeUnArchivo,
    middlewareDeMuchosArchivos,
}