

// check file exists or not by FS module (sync and async way)


var mHttp = require('http');
var mFs = require('fs');

var mServer = mHttp.createServer(function(req, res){

    if(req.url == "/"){

        // async way
        // first param is file path, second param is callback functin
        mFs.exists('./delete.txt', function(err){
            if(err){
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("Exist")
                res.end()
            }else{
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write("Not exist")
                res.end()
            }
        })

        // sync way
        /*var err = mFs.existsSync('./index1.js');

        if(err){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write("Exist")
            res.end()
        }else{
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write("Not exist")
            res.end()
        }*/
        
    }
})

mServer.listen(2323);
console.log("I am on 2323");
