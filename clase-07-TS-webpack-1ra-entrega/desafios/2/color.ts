function getRandomNumberInRange(desde: number, hasta: number) {
    return Math.floor(Math.random() * (hasta - desde)) + desde
}

function getNum0a255(): number {
    return getRandomNumberInRange(0, 256)
}

class Color {
    get() {
        return `rgb(${getNum0a255()},${getNum0a255()},${getNum0a255()})`
    }
}

const color = new Color()

console.log(color.get())