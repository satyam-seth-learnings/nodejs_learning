var http=require('http');
http.createServer(function(req,res){
    res.write("Hello nodemon in youtube");
    res.end();
}).listen(4000)