import { clienteSqlAdmin as knex } from './clienteSql.js'

try {
    const exists = await knex.schema.hasTable('personas')
    if (!exists) {
        await knex.schema.createTable('personas', tabla => {
            tabla.increments('id'),
                tabla.string('nombre'),
                tabla.integer('edad')
        })
        console.log('tabla "personas" creada!')
    } else {
        console.log('la tabla "personas" ya existe. no se realizaron cambios.')
    }
} catch (error) {
    console.log(`fallo la operacion: ${error.message}`)
} finally {
    knex.destroy()
}