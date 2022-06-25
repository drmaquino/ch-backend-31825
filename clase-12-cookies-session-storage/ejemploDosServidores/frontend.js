import express from 'express'

const app = express()

app.get('/inicio', (req, res) => {
    res.sendFile('inicio.html', { root: './views' })
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
