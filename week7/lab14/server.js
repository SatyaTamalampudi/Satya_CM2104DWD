var express = require('express');
var app = express();
var twitter = require('twitter');
var client = new twitter({
  consumer_key: '4mkqqMLHm3ZznBf18bPZHGeSD',
  consumer_secret: 'AX45ncSR4vduUknCLc7fAlK00pKf49S92I8VM7cC47Fw4Vof5m',
  access_token_key: '2580230261-iW5oVJQhFkgdtqDiPoUhqgrvhRjZmOMgcFNO9yY',
  access_token_secret: 'TOXzdBuA9gb0hCBW5B4AukUVbQZfi3vAtJz3adj4LhkQQ'
})
var parms = (screen_name,'nodejs'),

 app.use(express.static('public'))
 app.get('/', function(req, res){
   client.get('statuses/user_timeline',parms,function(error,tweets,response){
     if(!error){
       console.log(tweets);
     }
   });
      res.send("Hello world! by express");
     });
      app.listen(8080);
