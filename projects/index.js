



var mHttp = require('http');
var mFs = require('fs');


var mServer = mHttp.createServer(function(req, res){

    if(req.url == "/"){

        mFs.readFile('home.html', function(err, data){

            if(err){
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("Data not found")
                res.end();
            }else{
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                res.end();
            }
        })   
    }
    if(req.url == "/chat.html"){

        mFs.readFile('chat.html', function(err, data){

            if(err){
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("Data not found")
                res.end();
            }else{
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                res.end();
            }
        })   
    }
    if(req.url == "/contact.html"){

        mFs.readFile('contact.html', function(err, data){

            if(err){
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("Data not found")
                res.end();
            }else{
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                res.end();
            }
        })   
    }


})

mServer.listen(8080)
console.log("I am on 8080")


