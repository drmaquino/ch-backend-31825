import admin from "firebase-admin"
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync("./db/coderhouse-18c1d-firebase-adminsdk-u93yu-d2c0fc51c7.json", 'utf8'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const asObj = doc => ({ id: doc.id, ...doc.data() })

console.log('Base Firebase conectada!')

const db = admin.firestore();
const dbPersonas = db.collection('personas')

const guardado = await dbPersonas.add({ nombre: 'pepe' });
console.log(guardado.id)

const doc = await dbPersonas.doc(guardado.id).get();
console.dir(asObj(doc))

const result = []
const snapshot = await dbPersonas.get();
snapshot.forEach(doc => {
    result.push(asObj(doc))
})

console.dir(result)

await dbPersonas.doc(guardado.id).set({ nombre: 'papa' });
console.dir(asObj(await dbPersonas.doc(guardado.id).get()))

await dbPersonas.doc(guardado.id).delete();

//------------------------------------------------

try {
    // version fea e ineficiente pero entendible para empezar
    const dbColores = db.collection('colores')
    const ids = []
    const snapshot = await dbColores.get();
    snapshot.forEach(doc => {
        ids.push(doc.id)
    })
    const promesas = ids.map(id => dbColores.doc(id).delete())
    const resultados = await Promise.allSettled(promesas)
    const errores = resultados.filter(r => r.status == 'rejected')
    if (errores.length > 0) {
        throw new Error('no se borró todo. volver a intentarlo')
    }

    // version oficial
    // const ref = firestore.collection('personas')
    // ref.onSnapshot((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //         ref.doc(doc.id).delete()
    //     })
    // })

} catch (error) {
    throw new Error(`Error al borrar: ${error}`)
}
