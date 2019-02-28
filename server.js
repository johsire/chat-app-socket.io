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

// Connection with Socket.io;
io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets Connected', connections.length);

  // Disconnect;
  socket.on('disconnect', function(data){
      connections.splice(connections.indexOf(socket), 1);
      console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send Message;
  socket.on('send message', function(data){
    console.log(data);
    io.sockets.emit('new message', {msg: data});
  });
});
