class Persona {
    constructor(nombre, edad) {

        if (!nombre) throw new Error('falta el nombre')
        if (!edad) throw new Error('falta la edad')
        if (edad < 0) throw new Error('la edad debe ser positiva')

        this.nombre = nombre
        this.edad = edad
    }
}

module.exports = Persona