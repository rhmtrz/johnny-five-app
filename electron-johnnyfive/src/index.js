const { ipcRenderer } = require('electron');

const onLedOn = () => {
  console.log('Hello World ...')
  ipcRenderer.send('turn-on', 'ping, ping')
}

const onLedOff = () => {
  console.log('Hello World ...')
  ipcRenderer.send('turn-off', 'ping, ping')
}

const turnOnButton = document.getElementById('turn-on');
turnOnButton.addEventListener('click', onLedOn)

const turnOffButton = document.getElementById('turn-off');
turnOffButton.addEventListener('click', onLedOff)
