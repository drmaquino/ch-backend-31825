class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    static saludoCorto = 'hola'

    saludoCompleto() {
        console.log(`buenaaass, soy ${this.nombre}`)
    }

    saludoEstatico() {
        console.log(Persona.saludoCorto)
    }
}

const persona1 = new Persona('marian', 35)
const persona2 = new Persona('laura', 40)

console.log(persona1)
console.log(persona2)
console.log(Persona)

persona1.saludoCompleto()
persona2.saludoCompleto()

persona1.saludoEstatico()
persona2.saludoEstatico()
