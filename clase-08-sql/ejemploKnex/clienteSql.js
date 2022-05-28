import { getConfig } from './knexConfig.js'
import crearKnex from 'knex'

const clienteSqlAdmin = crearKnex(getConfig('ADMIN'))
const clienteSqlUser = crearKnex(getConfig('USER'))

export {
    clienteSqlAdmin,
    clienteSqlUser
}