

// writing file by FS module (sync and async way)


var mHttp = require('http');
var mFs = require('fs');

var mServer = mHttp.createServer(function(req, res){

    if(req.url == "/"){

        // async way
        // first param is old file path, second param is new file path, third param is callback functin
        mFs.renameSync('./index.js', './index1.js', function(err){
            if(err){
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("Error found")
                res.end()
            }else{
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("No error found")
                res.end()
            }
        })

        // sync way
        /*var err = mFs.renameSync('./index.js', './index1.js');

        if(err){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write("Error found")
            res.end()
        }else{
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write("No error found")
            res.end()
        }*/
        
    }
})

mServer.listen(2323);
console.log("I am on 2323");
