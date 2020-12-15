

// writing file by FS module (sync and async way)


var mHttp = require('http');
var mFs = require('fs');

var mServer = mHttp.createServer(function(req, res){

    if(req.url == "/"){

        // async way
        // first param is file path, second param is callback functin
        /*mFs.unlink('./delete.txt', function(err){
            if(err){
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("Error found")
                res.end()
            }else{
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("No error found")
                res.end()
            }
        })*/

        // sync way
        var err = mFs.unlinkSync('./delete.txt');

        if(err){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write("Error found")
            res.end()
        }else{
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write("No error found")
            res.end()
        }
        
    }
})

mServer.listen(2323);
console.log("I am on 2323");
