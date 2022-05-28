import express from 'express'
import { clienteSqlUser } from './clienteSql.js'

const app = express()

app.use(express.json())

app.get('/api/personas', async (req, res) => {
    try {
        const personas = await clienteSqlUser.select('*').from('personas')
        res.json(personas)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

app.get('/api/personas/:id', async (req, res) => {
    try {
        const idPersona = req.params.id
        const personas = await clienteSqlUser.select('*').from('personas').where({ id: idPersona })
        if (personas.length === 0) {
            res.status(404).json({ msg: 'not found' })
        } else {
            res.json(personas[0])
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

app.post('/api/personas', async (req, res) => {
    try {
        const datosPersona = req.body
        const result = await clienteSqlUser.insert(datosPersona).into('personas')
        res.json(result)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

app.put('/api/personas/:id', async (req, res) => {
    try {
        const datosPersona = req.body
        const idPersona = req.params.id
        await clienteSqlUser.update(datosPersona).from('personas').where({ id: idPersona })
        res.json({ msg: 'ok' })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

app.delete('/api/personas/:id', async (req, res) => {
    try {
        const idPersona = req.params.id
        await clienteSqlUser.delete().from('personas').where({ id: idPersona })
        res.json({ msg: 'ok' })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

app.listen(8080, () => {
    console.log('servidor conectado!')
})

