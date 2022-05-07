const fs = require('fs')
const Persona = require('./Persona.js')

class GrupoArchivo {
    constructor(ruta) {
        this.ruta = ruta
        this.personas = []
    }

    _guardar() {
        const personasComoJson = JSON.stringify(this.personas, null, 2)
        return fs.promises.writeFile(this.ruta, personasComoJson)
    }

    _leer() {
        return fs.promises.readFile(this.ruta, 'utf-8')
            .then(texto => {
                const personasComoArray = JSON.parse(texto)
                this.personas = personasComoArray
            })
    }

    async agregar(datos) {
        const persona = new Persona(datos.nombre, datos.edad)
        await this._leer()
        this.personas.push(persona)
        await this._guardar()

    }

    async obtenerTodas() {
        await this._leer()
        return [...this.personas]
    }

    async borrarPersona(nombre) {
        await this._leer()
        const indice = this.personas.findIndex(persona => persona.nombre === nombre)
        if (indice !== -1) {
            this.personas.splice(indice, 1)
            await this._guardar()
        }
    }
}

module.exports = GrupoArchivo