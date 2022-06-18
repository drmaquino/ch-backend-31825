// import * as tools from '../src/tools.js'
import { compare } from '../src/tools.js'
import assert from 'assert'

function validarIgualdad(cosa1, cosa2) {
    // if (cosa1 === cosa2) { console.log('ok') } else { console.log('error') }
    assert.strictEqual(cosa1, cosa2)
}

function testPrimeroMenorAlSegundoDevuelveMenosUno() {

    // setup
    const num1 = 5
    const num2 = 10
    const resultadoEsperado = -1

    // exercise
    const resultado = compare(num1, num2)

    // assertion
    validarIgualdad(resultado, resultadoEsperado)
}

function testPrimeroMayorAlSegundoDevuelveUno() {

    // setup
    const num1 = 10
    const num2 = 5
    const resultadoEsperado = 1

    // exercise
    const resultado = compare(num1, num2)

    // assertion
    validarIgualdad(resultado, resultadoEsperado)
}

function testPrimeroIgualAlSegundoDevuelveCero() {

    // setup
    const num1 = 5
    const num2 = 5
    const resultadoEsperado = 0

    // exercise
    const resultado = compare(num1, num2)

    // assertion
    validarIgualdad(resultado, resultadoEsperado)
}

testPrimeroMenorAlSegundoDevuelveMenosUno()
testPrimeroMayorAlSegundoDevuelveUno()
testPrimeroIgualAlSegundoDevuelveCero()

//=====================================================

// otra posibilidad, mas orientada a objetos!

// const num1 = new NumeroComparable(5)

// const resultado = num1.compare(10)

// resultado === -1