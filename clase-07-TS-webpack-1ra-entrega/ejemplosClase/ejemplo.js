'use strict'

const o = Object.freeze({ a: 1 })
o.b = 2
delete o.a

console.log(o)