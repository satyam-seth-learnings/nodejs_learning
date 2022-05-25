// Example-1
// console.log("Hello World");

// Example-2
// var a=7;
// var b=2;
// var c=a+b;
// console.log("The Output is "+c);

// Example-3
var http=require('http');
http.createServer(function(req,res){
    // Example-3.1
    // res.write("Welcome Back Alien!!!");
    // res.end();

    // Example-3.2
    // res.end("Welcome Back Alien!!!");

    // Example-3.3
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("Welcome Back Alien!!!");
}).listen(8080)