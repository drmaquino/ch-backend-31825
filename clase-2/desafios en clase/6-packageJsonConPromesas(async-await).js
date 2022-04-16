const fs = require('fs')

async function main() {
  let contenido
  try {
    contenido = fs.promises.readFile('info.txt', 'utf-8')
    console.log('info.json: lectura exitosa')
  } catch (error) {
    throw new Error(`Error en lectura: ${error.message}`)
  }

  const info = JSON.parse(contenido)
  console.log(info)

  const packageJsonObj = info.contenidoObj

  packageJsonObj.author = 'Coderhouse'

  try {
    await fs.promises.writeFile('package.json.coder', JSON.stringify(packageJsonObj, null, 2))
    console.log('package.json.coder: escritura exitosa')
  } catch (error) {
    throw new Error(`Error en escritura: ${error.message}`)
  }
}

main()

