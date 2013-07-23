var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  var htmlfileBuffer  = fs.readFileSync("index.html");
//  response.send('Hello World 2!');
  response.send(fs.readFileSync("index.html").toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
