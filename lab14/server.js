var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
 consumer_key: 'agLMjcDXacKsXu1fXd4AdxDn8',
 consumer_secret: '6zHzwOstoAPwgBrGRMBtZdgRSiQq5l828aOMCj3wJGc3T1TPxQ',
 access_token_key: '975768435522179074-uJb3KQe2lMYIuciEpaRdIdPyKVOStj8',
 access_token_secret: 'q2V77slhFzB0eZsWMqok0AoIAo4lubqTtjEI6w6rWSPtS'
});

app.use(express.static('public'))
app.get('/', function(req, res){
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
   if (!error) {
   console.log(tweets);
   }
  });
 res.send("Hello world! by express");
});
app.listen(8080);
