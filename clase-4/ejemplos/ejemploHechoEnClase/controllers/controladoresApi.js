const { databasePersonas } = require("../databases/databasePersonas.js")

const serverInfo = {
    os: 'linux',
    framework: 'express'
}

const controladoresApi = {
    getInfo: (req, res) => {
        res.json(serverInfo);
    },
    getPersona: (req, res) => {
        const id = req.params.idPersona
        try {
            const personaBuscada = databasePersonas.obtenerSegunId(id);
            res.json(personaBuscada)
        } catch (error) {
            if (error.tipo === 'db not found') {
                res.status(404).json({ error: error.message })
            } else {
                res.status(500).json({ error: error.message })
            }
        }
    },
    getPersonas: (req, res) => {
        console.log(req.query)
        if (Object.entries(req.query).length > 0) {
            res.json(databasePersonas.obtenerSegunRol(req.query.rol))
        } else {
            res.json(databasePersonas.obtenerTodos())
        }
    },
    postPersonas: (req, res) => {
        const personaAgregada = databasePersonas.agregarPersona(req.body)
        res.status(201).json(personaAgregada)
    },
    deletePersona: (req, res) => {
        const id = req.params.idPersona
        try {
            databasePersonas.borrarPersonaSegunId(id);
            res.sendStatus(204)
        } catch (error) {
            if (error.tipo === 'db not found') {
                res.status(404).json({ error: error.message })
            } else {
                res.status(500).json({ error: error.message })
            }
        }
    },
    putPersona: (req, res) => {
        const id = req.params.idPersona
        const datos = req.body
        try {
            const personaReemplazada = databasePersonas.reemplazarPersona(id, datos)
            res.json(personaReemplazada)
        } catch (error) {
            if (error.tipo === 'db not found') {
                res.status(404).json({ error: error.message })
            } else {
                res.status(500).json({ error: error.message })
            }
        }
    },
    getProfes: (req, res) => {
        res.json(databasePersonas.obtenerSegunRol('profe'))
    }
}

module.exports = { controladoresApi }
