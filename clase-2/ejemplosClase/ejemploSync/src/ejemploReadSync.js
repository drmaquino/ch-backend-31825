const fs = require('fs')

const ruta = '../static/ejemplo.txt'

try {
    const contenido = fs.readFileSync(ruta, 'utf-8')
    console.log(contenido)
} catch (error) {
    throw new Error(`Error en lectura: ${error.message}`)
}