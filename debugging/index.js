

// we can use IDE's debug system to debug our program
// in vs code > F5 > select Js debuger
// set breakpoints when you want to debug
// check left variable section and watch section to get the bug


var a = 12;
var b = 45;
var c;
var d = 32;
var ab = a + b;
var cd = c + d;
var result = ab - cd;

//console.log(result);


// here we will call an API by 'axios' with the comand "npm install axios"
// and will see how data is coming

// axios is a tools to call the API to get the response like Postman
var mAxios = require('axios');

var mUrl = "https://restcountries.eu/rest/v2/name/united"

mAxios.get(mUrl).then(function(res){

    console.log(res.data)
    console.log(res.status)

}).catch(function(err){

    console.log(err)

});


