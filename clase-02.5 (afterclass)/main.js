const GrupoMemoria = require('./GrupoMemoria.js')
const GrupoArchivo = require('./GrupoArchivo.js')

// const grupo = new GrupoMemoria()

// console.log(grupo)

// const persona = {
//     nombre: 'marian',
//     edad: 36,
//     cargo: 'profe'
// }

// console.log(persona)

// grupo.agregar(persona)

// console.log(grupo.obtenerTodas())

// const personas = grupo.obtenerTodas()

// personas.push(1)

// console.log(grupo.obtenerTodas())

// // grupo.agregar(1)

// console.log(grupo.obtenerTodas())

async function main() {
    const grupo = new GrupoArchivo('./personas.json')

    const persona = {
        nombre: 'marian',
        edad: 36,
        cargo: 'profe'
    }

    await grupo.agregar(persona)

    const persona2 = {
        nombre: 'juana',
        edad: 36,
        cargo: 'profe'
    }

    await grupo.agregar(persona2)

    console.log(await grupo.obtenerTodas())

    await grupo.borrarPersona('marian')

    console.log(await grupo.obtenerTodas())

}

main()
