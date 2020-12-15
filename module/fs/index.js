



var mHttp = require('http');
var mFs = require('fs');

var mServer = mHttp.createServer(function(req, res){

    if(req.url == "/"){


        // here we are using 'sync...' method

        /* mFs.readFile('home.html', function(err, data){

             res.writeHead(200, {'Conten-Type' : 'text/html'});
             res.write(data);
             res.end();

         });  =*/

         
        // here we are using 'async...' method

        var data = mFs.readFileSync('home.html')

        res.writeHead(200, {'Conten-Type' : 'text/html'})
        res.write(data)
        res.end()

    }

});

mServer.listen(3000);

console.log("I am on...")