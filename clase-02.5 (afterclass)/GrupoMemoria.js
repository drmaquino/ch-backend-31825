const Persona = require('./Persona.js')

class GrupoMemoria {
    constructor() {
        this.personas = []
    }

    agregar(datos) {
        const persona = new Persona(datos.nombre, datos.edad)
        this.personas.push(persona)
    }

    obtenerTodas() {
        return [...this.personas]
    }

    borrarPersona(nombre) {
        const indice = this.personas.findIndex(persona => persona.nombre === nombre)
        if (indice !== -1) {
            this.personas.splice(indice, 1)
        }
    }
}

module.exports = GrupoMemoria