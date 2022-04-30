class Contenedor {
    constructor() {
        this.cosas = []
    }
    save(cosa) { this.cosas.push(cosa) }
    getAll() { return this.cosas }
}

const c = new Contenedor()

c.save({
    id: "id del producto),",
    title: "nombre del producto),",
    price: "precio),",
    thumbnail: "url de la foto del producto)",
})

console.log(c.getAll())