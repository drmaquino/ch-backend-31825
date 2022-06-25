import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors()) // esto es para poder recibir peticiones de otros servidores!

app.get('/api/personas', (req, res) => {
    res.json({ nombre: 'marian' })
})

const PORT = 8081
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
