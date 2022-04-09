function crearSaludar(nombre) {
    return function saludar() {
        console.log(`hola, ${nombre}`)
    }
}

const saludarAMarian = crearSaludar('marian')

const saludarALucas = crearSaludar('lucas')

saludarAMarian()
saludarALucas()