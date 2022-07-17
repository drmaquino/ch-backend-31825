import { createAdapter } from "@socket.io/mongo-adapter"
import { MongoClient } from "mongodb"

const DB = "mydb";
const COLLECTION = "socket.io-adapter-events";

async function createMongoAdapter() {

    const mongoClient = new MongoClient("mongodb://localhost", {
        useUnifiedTopology: true,
        authSource: 'admin',
        auth: {
            username: 'root',
            password: 'mongopassword'
        }
    });

    await mongoClient.connect();

    try {
        await mongoClient.db(DB).createCollection(COLLECTION, {
            capped: true,
            size: 1e6
        });
    } catch (e) {
        // collection already exists
    }

    const mongoCollection = mongoClient.db(DB).collection(COLLECTION);

    const mongoAdapter = createAdapter(mongoCollection);

    return mongoAdapter
}

//=============================================================

import express from 'express';
import cors from 'cors'

function createExpressApp() {
    const app = express()
    app.use(cors())

    app.get('/api', (req, res) => {
        res.send(`response from process: ${process.pid}`)
    })

    return app
}

//=========================================

import { Server as IOServer } from 'socket.io'
const frontendUrl = "http://localhost:8080";

function setupWebSocket(httpServer) {
    const io = new IOServer(httpServer, {
        cors: {
            origin: frontendUrl
        }
    })

    io.on('connection', socket => {
        console.log(socket.id)
        socket.on('msg', msg => {
            console.log(msg)
            io.sockets.emit('msg', msg)
        })
    })

    return io
}

//=========================================

const PORT = process.env.PORT
if (!PORT) throw new Error('falta puerto!')

const app = createExpressApp()
const httpServer = app.listen(PORT, () => {
    console.log(`listening on port: ${httpServer.address().port}`)
})
const io = setupWebSocket(httpServer)
io.adapter(await createMongoAdapter());