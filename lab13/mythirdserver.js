var http = require('http');
var oneLinerJoke = require('knock-knock-jokes');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
var randomJoke = oneLinerJoke.getRandomJoke();
 res.end(randomJoke.body);
}).listen(8080);
