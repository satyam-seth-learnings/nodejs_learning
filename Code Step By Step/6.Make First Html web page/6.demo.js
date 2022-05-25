var http=require('http');

var page=`
<h1>Hello node js </h1>
<input type="text" /> <br> <br>
<input type="text" /> <br> <br>
<input type="text" />`;

http.createServer(function(req,res){
    // res.write('Hello node');
    // res.write('<h1>Hello node</h1>');
    
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.write('<input type="text" />');
    res.write(page);
    res.end();
}).listen(4000)