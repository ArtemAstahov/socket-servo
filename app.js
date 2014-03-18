var app = require('http').createServer(handler), 
    io = require('socket.io').listen(app), 
    fs = require('fs');

//Custom module
var arduino = require("./arduino.js");

//Start listening on localhost:3000
app.listen(3000);
console.log("Server is listening on port 3000...");
//Turn off debug statments
io.set('log level', 1);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}



io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });

/*
  socket.on('my other event', function (data) {
    console.log(data);
    });
*/

  //recieve client data

  //Recieves click handler data from client and passes it too the arduino module
  socket.on('max', function(data){
    console.log(data.btn);
    arduino.buttons(data.btn);

  });


  socket.on('min', function(data){
    console.log(data.btn);
    arduino.buttons(data.btn);

  });

  socket.on('center', function(data){
    console.log(data.btn);
    arduino.buttons(data.btn);

  });
});


