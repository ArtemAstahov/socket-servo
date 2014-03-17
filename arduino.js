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

exports.controls = function(clientInput){

	if(clientInput === "d"){
        myServo.max();
      }
     else if(clientInput === "w"){
        myServo.center();
      }
     else if(clientInput === "a"){
        myServo.min();
      }
}

exports.buttons = function(data){

  if(data === 'max'){
        myServo.max();
   
}

}