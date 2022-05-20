function generarId() {
    return `${Date.now()}`
}

const personas = [
    {
        id: '123',
        nombre: 'marian',
        rol: 'profe'
    },
    {
        id: '456',
        nombre: 'will',
        rol: 'tutor'
    }
]

const databasePersonas = {
    obtenerTodos: () => {
        return [...personas]
    },
    obtenerSegunRol: rol => {
        return personas.filter(p => p.rol === rol)
    },
    obtenerSegunId: id => {
        const personaBuscada = personas.find(p => p.id === id)
        if (!personaBuscada) {
            const error = new Error('no existe una persona con ese id')
            error.tipo = 'db not found'
            throw error
        }
        return personaBuscada
    },
    agregarPersona: datos => {
        // deberia validar cosas
        // si ya existe? no la agrego
        // si le faltan datos? no la agrego
        // si algun dato tiene un formato invalido? no la agrego 
        const persona = datos
        persona.id = generarId()
        personas.push(persona)
        return persona
    },
    borrarPersonaSegunId: id => {
        const indiceBuscado = personas.findIndex(p => p.id === id)
        if (indiceBuscado === -1) {
            const error = new Error('no existe una persona con ese id')
            error.tipo = 'db not found'
            throw error
        }
        personas.splice(indiceBuscado, 1)
    },
    reemplazarPersonaSegunId: (id, datos) => {
        const indiceBuscado = personas.findIndex(p => p.id === id)
        if (indiceBuscado === -1) {
            const error = new Error('no existe una persona con ese id')
            error.tipo = 'db not found'
            throw error
        }
        // deberia validar datos
        // si le faltan datos? no la agrego
        // si algun dato tiene un formato invalido? no la agrego 
        const persona = datos
        persona.id = id
        personas[indiceBuscado] = persona
        return persona
    }
}

module.exports = { databasePersonas }
