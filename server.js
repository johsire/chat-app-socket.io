// Our Express Server;

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

// Get our server up & running;
server.listen(process.env.PORT || 3000);
console.log('Magic happening @Port 3000!...stay tuned!');

// Route to our home page;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
