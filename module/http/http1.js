


// creating a http response by 'http' module

var http = require('http');

var server=http.createServer(function (req,res) {
    res.end("Hello World")
});

server.listen(5050);

// to test the response, browse: localhost:5050

console.log("Server Run Successfully"); 