var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function(){
  var motor = new five.Motor(9)
  var led = new five.Led(13)

  motor.on('start', function(err, timestamp){
    led.on()
    board.wait(2000, function(){
      motor.stop()
    })
  })

  motor.on('stop', function(err, timestamp){
    led.off()
    board.wait(1000, function(){
      motor.start(200)
    })
  })

  motor.start(200)
 
})