// import parseArgs from 'minimist'

// // console.log(process.argv)

// // console.log(process.argv.slice(2))

// // const argsObj = parseArgs(process.argv.slice(2))

// const argsObj = parseArgs(process.argv.slice(2), {
//     default: { nombre: 'marian' }, alias: { m: 'modo', f: 'fecha' }
// })

// console.log(argsObj)

//=====================================================

// import parse from 'yargs/yargs'
// const yargs = parse(process.argv.slice(2))

// const argsObj = yargs
//     .default({ nombre: 'marian' })
//     .alias({ m: 'modo', f: 'fecha' })
//     .boolean('detalles')
//     .argv

// console.log(argsObj)

//=====================================================

// console.log(process.env) //environment

// console.log(process.env.USERNAME, process.env.DESKTOP_SESSION)

// para Powershell
// $env:APELLIDO=bingo ; node main.js

// para CMD
// set APELLIDO=bingo ; node main.js

// import { modo } from './config.js';

// console.log(modo)

//============================================


import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.PELI)