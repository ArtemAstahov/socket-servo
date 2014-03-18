var express = require('express')
  , arduino = require("./arduino.js")
  , http = require('http');
 
var app = express();
//Start listening on port 3000
var server = app.listen(3000);
var io = require('socket.io').listen(server);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

//Turn off debug statments
io.set('log level', 1);

io.sockets.on('connection', function (socket) {

  //Recieves click handler data from client and passes it too the arduino module
  function click_recieve(eventId){

  socket.on(eventId, function(data){
    console.log(data.btn);
    arduino.buttons(data.btn);

  });
}

  click_recieve('min');
  click_recieve('max');
  click_recieve('center');

});


