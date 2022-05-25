const express=require('express');

const app=express();

app.get('/',function(req,res){
    res.send('Hello World');
})

app.get('/alien',function(req,res){
    const id=req.query.id;
    res.send('Welcome Back Alien '+id);
})

app.get('/alien/:id',function(req,res){
    const id=req.params.id;
    res.send('Hey Satyam '+id);
})

app.listen(9000,function(req,res){
    console.log("Running..")
});