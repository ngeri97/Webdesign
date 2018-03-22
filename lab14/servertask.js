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
app.get('/', function(req, res) {


    $('#searchform').submit(function() {
      var searchterms = $("#searchterms").val();
      getResultsFromOMDB(searchterms);
      return false;

    var params = {
    screen_name: searchterms
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      var output = "";
      for (var t = 0; t < tweets.length; t++) {
        output += "<div>";
        output += "<h2>" + tweets[t].user.screen_name + "<h2>";
        output += "<p>" + tweets[t].text + "</p>"
        output += "</div>";
      }
      res.send(output);
    } else {
      res.send(error);
    }
  });
    });

});
app.listen(8080);
