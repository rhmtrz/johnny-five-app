const socket = io();

const handleLedOn = () => {
  let lighted = true
  socket.emit('turn-on', lighted)
};

const handleLedOff = () => {
  socket.emit('turn-off')
}


socket.on('released', (event, arg) => {
  debugger
  console.log('this is for test', event, arg)
})

const onButton = document.getElementById('onButton');
onButton.addEventListener('click', handleLedOn)

const offButton = document.getElementById('offButton');
offButton.addEventListener('click', handleLedOff)
