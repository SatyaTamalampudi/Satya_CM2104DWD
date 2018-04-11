var express = require('express');
var app = express();
var knockknock = require('knock-knock-jokes');

app.get('/',function(req,res){
  res.send("Hello World! by express");
});
app.get('/test',function(req,res){
  res.send("this is route 2");
});
app.get('/joke',function(req,res){
res.writeHead(200, {'Content-Type':'text/html'});
var randomJoke = knockknock()
res.end(randomJoke);
  
});


app.listen(8080);
