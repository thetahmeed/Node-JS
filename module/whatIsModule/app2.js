





const sayMyName = () => {
    console.log('Heisbarge')
}

let luckyN = 12



//                                          method 1:

// for a single item
// module.exports = sayMyName

// for multiple item
// module.exports = {
//     sayMyName,
//     luckyN
// }

//                                          method 2:
//module.exports.sayMyName = sayMyName
// module.exports.luckyN = luckyN

//                                          method 3:
module.exports.ohBhai = 'Mujhe Marooo!'
module.exports.myNumber = 00