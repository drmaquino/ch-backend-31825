import assert from 'assert'
import Comparador from '../src/Comparador.js'

import { enviarMail } from './mocks/enviadorDeMails.js'

function testPrimeroMenorAlSegundoDevuelveMenosUno() {

    // setup
    const num1 = 5
    const num2 = 10
    const resultadoEsperado = -1
    const comparador = new Comparador(enviarMail)

    // exercise
    const resultado = comparador.compare(num1, num2)

    // assertion
    assert.strictEqual(resultado, resultadoEsperado)
}

function testPrimeroMayorAlSegundoDevuelveUno() {

    // setup
    const num1 = 10
    const num2 = 5
    const resultadoEsperado = 1
    const comparador = new Comparador(enviarMail)

    // exercise
    const resultado = comparador.compare(num1, num2)

    // assertion
    assert.strictEqual(resultado, resultadoEsperado)
}

function testPrimeroIgualAlSegundoDevuelveCero() {

    // setup
    const num1 = 5
    const num2 = 5
    const resultadoEsperado = 0
    const comparador = new Comparador(enviarMail)

    // exercise
    const resultado = comparador.compare(num1, num2)

    // assertion
    assert.strictEqual(resultado, resultadoEsperado)
}

testPrimeroMenorAlSegundoDevuelveMenosUno()
testPrimeroMayorAlSegundoDevuelveUno()
testPrimeroIgualAlSegundoDevuelveCero()