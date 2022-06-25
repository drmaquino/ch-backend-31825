import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

const sesiones = {}

app.use(express.json())
app.use(cookieParser('secreto!'))

// app.use((req, res, next) => {
//     res.contestarTodoBien = () => {
//         res.send('TODO BIEN')
//     }
//     next()
// })

app.use((req, res, next) => {
    const elIdDeSesion = req.signedCookies.session_id
    if (elIdDeSesion) {
        req.sesionUsuario = sesiones[elIdDeSesion]
    }
    next()
})

app.get('/', (req, res) => {
    res.send('OK')
    // res.contestarTodoBien()
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.get('/info', (req, res) => {
    // const elIdDeSesion = req.signedCookies.session_id
    // const laInfo = sesiones[elIdDeSesion]
    // res.send(laInfo)
    res.send(req.sesionUsuario)
})

app.get('/cookies', (req, res) => {
    res.json({
        normales: req.cookies,
        firmadas: req.signedCookies
    })
})

app.post('/datos', (req, res) => {
    req.sesionUsuario.datos = { ...req.sesionUsuario.datos, ...req.body }
    res.send('ok')
})

app.post('/cookies', (req, res) => {
    const options = {}

    if (req.body.milisegundosDeExpiracion) {
        options.maxAge = req.body.milisegundosDeExpiracion
    }

    if (req.body.seguro) {
        options.signed = true
    }

    const newSessionId = `${Date.now()}`
    sesiones[newSessionId] = { nombre: req.body.nombre }

    // res.cookie('nombre', req.body.nombre || 'anonimo', options)
    res.cookie('session_id', newSessionId, options)

    res.send('dato guardado en cookies!')
})

app.delete('/cookies', (req, res) => {
    res.clearCookie(req.query.nombrecookie)
    res.send('borrado!')
})

const server = app.listen(8080, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})