const { databaseAutores } = require("../databases/databaseAutores.js")

const serverInfo = {
    os: 'linux',
    framework: 'express'
}

const controladoresApi = {
    info: (req, res) => {
        res.json(serverInfo);
    },
    autores: (req, res) => {
        res.json(databaseAutores.obtenerTodos())
    },
    profes: (req, res) => {
        res.json(databaseAutores.obtenerSegunRol('profe'))
    }
}

module.exports = { controladoresApi }
