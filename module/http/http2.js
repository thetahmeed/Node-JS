


// 2. getting response for a particular request

var http = require('http');

var server=http.createServer(function (req,res) {
    
    if (req.url == "/"){

        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write('<h1>Welcome to Home</h1>')
        res.end();

    }else if(req.url == "/chat"){

        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write('<h1>Welcome to ChatRoom</h1>')
        res.end();

    }
    
});

server.listen(5050);

// to test the response, browse: localhost:5050

console.log("Server2 Run Successfully"); 