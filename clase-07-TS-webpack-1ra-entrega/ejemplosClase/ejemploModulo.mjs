export default class Persona {
    saludar() {
        console.log('hola')
    }
}

export const valor = 6

export async function lalala() {
    return new Promise((resolve, reject) => {
        resolve('lala')
    })
}