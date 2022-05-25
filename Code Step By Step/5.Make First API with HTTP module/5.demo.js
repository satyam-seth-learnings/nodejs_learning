var http=require('http');

// data='{"name":"anil"}';
// data={name:"anil",age:"20",email:"anil@test.com"};
data=[
    {name:"anil",age:"20",email:"anil@test.com"},
    {name:"peter",age:"22",email:"peter@test.com"}
]

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'})
    // res.write("Hello");
    // res.write('{"name":"anil"}');
    // res.write(data);
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900)