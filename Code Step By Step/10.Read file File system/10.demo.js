var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('10.demo.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        return res.end();
    });
}).listen(4000)