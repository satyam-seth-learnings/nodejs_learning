// Example-1
// var fs=require('fs');
// var rs=fs.createReadStream('./12.demo.txt');
// rs.on('open',function(){
//     console.log("demo file is open");
// })

// Example-2
var events=require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on("speek",function(name){
    console.log(name,"is speaking");
});

eventEmitter.emit("speak","Peter");