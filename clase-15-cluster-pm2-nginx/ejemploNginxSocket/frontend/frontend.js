import express from 'express';

function startServer(port) {
    const app = express()

    app.use(express.static('public'))

    const server = app.listen(port, () => {
        console.log(`listening on port: ${port}`)
    })

    return server
}

const PORT = process.env.PORT
if (!PORT) throw new Error('falta puerto!')

startServer(PORT)