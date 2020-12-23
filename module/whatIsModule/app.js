





// to import default modules like 'http'
// const http = require('http')

// for self made modules

const {ohBhai, myNumber} = require('./app2')

console.log(ohBhai)
console.log(myNumber)

// or

const anyName = require('./app2')

const data1 = anyName.ohBhai
const data2 = anyName.myNumber

console.log(data1+data2)