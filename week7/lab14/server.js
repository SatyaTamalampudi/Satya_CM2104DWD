var express = require('express');
var app = express();
var twitter = require('twitter');
var client = new twitter({
  consumer_key: '4mkqqMLHm3ZznBf18bPZHGeSD',
  consumer_secret: 'AX45ncSR4vduUknCLc7fAlK00pKf49S92I8VM7cC47Fw4Vof5m',
  access_token_key: '2580230261-iW5oVJQhFkgdtqDiPoUhqgrvhRjZmOMgcFNO9yY',
  access_token_secret: 'TOXzdBuA9gb0hCBW5B4AukUVbQZfi3vAtJz3adj4LhkQQ'
});

app.use(express.static('public'))

app.get('/', function(req, res){
   var term = req.query.term;
   var parms = (screen_name,'nodejs');
   client.get('statuses/user_timeline', params, function(error, tweets, response) {

        if (!error) {

            //console.log(tweets);

            var output = "";

            for (var t = 0; t < tweets.length; t++) {

                output += "<div>";

                output += "<h2>" + tweets[t].user.screen_name + "<h2>";

                output += "<p>" + tweets[t].text + "</p>"

                output += "</div>";

            }

            //res.send(output);

        }

    });
    });

      app.listen(8080);
