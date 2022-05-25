var fs=require('fs');

// Example-1 Read Data
// fs.readFile('calc.js','utf8',function(err,data){
//     // console.log(err);
//     console.log(data);
// })

// Example-2 Write Data
// fs.writeFile('calc1.js','console.log("done");',function(err){
//     console.log("Data Saved")
// })

// Example-3 Append Data
// fs.appendFile('calc.js','console.log("done");',function(err){
//     console.log("Data Saved")
// })

// Example-4 Delete Data
fs.unlink('calc.js',function(err){
    console.log("Deleted")
})