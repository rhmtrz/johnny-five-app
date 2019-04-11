const {ipcRenderer} = require('electron');

const onButtonClicked = () => {
  ipcRenderer.send('hoge', 'ping');
}

const button = document.getElementById('led-button')
button.addEventListener('click', onButtonClicked)
