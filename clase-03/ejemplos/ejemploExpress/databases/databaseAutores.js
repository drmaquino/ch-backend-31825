const autores = [
    {
        nombre: 'marian',
        rol: 'profe'
    },
    {
        nombre: 'will',
        rol: 'tutor'
    }
]

const databaseAutores = {
    obtenerTodos: () => {
        return [...autores]
    },
    obtenerSegunRol: rol => {
        return autores.filter(a => a.rol === rol)
    }
}

module.exports = { databaseAutores }
