const five = require("johnny-five");

const socket = io('http://localhost:3000/', { forceNew: true });

const board = new five.Board();
const onTurnOnLed = () => {
  socket.emit('turn on', console.log('button clicked ...'))
  // board.on('ready', () => {
  //   let led = new five.Led(13);
  //   led.on();
  // })
};

const turnOn = document.getElementById('turnOn');
turnOn.addEventListener('click', onTurnOnLed)

