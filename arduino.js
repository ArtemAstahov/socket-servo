//Require johnny-five
var five = require("johnny-five"),
    board, myServo;

//Create a new board instance
board = new five.Board();

//Wait till the board is ready
board.on("ready", function() {

//Create a new servo object and set pin 9 as the input
  myServo = new five.Servo(9);
/*
  board.repl.inject({
    servo: myServo
  });

 myServo.sweep();
*/
//Center the servo on startup after 2 seconds
  this.wait(2000, function(){
    myServo.stop();
    myServo.center();
  });

  

});


//Control servo with buttons
exports.buttons = function(data){

  switch(data) {
    case "max":
      myServo.max();
      break;
    case "min": 
      myServo.min();
      break;
    case "center": 
      myServo.center();
      break;
  }

}