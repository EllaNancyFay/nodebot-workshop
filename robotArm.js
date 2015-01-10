var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var servo = new five.Servo(9);
  var potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  potentiometer.on('data', function() {
    var stopPoint = five.Fn.map(this.value,0,1023,0,179)
    servo.to(stopPoint);
  });

});