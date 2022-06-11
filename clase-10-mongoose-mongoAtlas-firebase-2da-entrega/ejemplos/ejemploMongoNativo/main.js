import { MongoClient } from 'mongodb'

const host = 'localhost'
const port = '27017'

const username = 'root'
const password = 'mongopassword'

const database = 'coderhouse'

const uri = `mongodb://${host}:${port}`;

// alternativa, todo en el str de cnx
// const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    auth: {
        username,
        password,
    }
})

await client.connect()

try {
    const dbCoderhouse = client.db("coderhouse")
    // const dbCoderhouse = client.db() // o si ya lo especifiqué en el str de cnx
    const dbPersonas = dbCoderhouse.collection("personas");
    await dbPersonas.insertOne({ nombre: 'marian', edad: 36 })
    const personas = await dbPersonas.find().toArray()
    console.log(personas)
} catch (error) {
    console.log(error)
} finally {
    await client.close();
}