import { crearServidor } from './server.js';

// const puerto = process.env.PORT ?? 0
const puerto = process.argv.slice(2)[0] ?? 0

crearServidor(puerto)