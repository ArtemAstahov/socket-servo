// set up ======================================================================

var express = require('express');
var five = require("johnny-five");
var servo = require("./arduino/servo.js");
var http = require('http');
var port = process.env.PORT || 3000; 
var app = express();

// configuration ===============================================================




// routes ======================================================================

require('./app/routes.js')(app);

//Start listening on port 3000
var server = app.listen(port);
var io = require('socket.io').listen(server);

//Turn off debug statments
io.set('log level', 1);

io.sockets.on('connection', function (socket) {

  //Recieves click handler data from client and passes it too the arduino/servo.js module
  function click_recieve(eventId){

  socket.on(eventId, function(data){
    console.log(data.btn);
    servo.controls(data.btn);

  });
}

  click_recieve('min');
  click_recieve('max');
  click_recieve('center');

});


