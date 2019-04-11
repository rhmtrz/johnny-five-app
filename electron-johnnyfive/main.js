const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const five = require("johnny-five");


require('electron-reload')(__dirname)
let win;

const createWindow = () => {
  win = new BrowserWindow();
  
  win.loadURL(url.format({
      pathname: path.join(__dirname, 'src/index.html'),
      protocol: 'file',
      slashes: true
    }));
  
  win.webContents.openDevTools()
  
  ipcMain.on('hoge', (event, arg) => {
    console.log('this is event', arg)
    five.Board().on('ready', () => {
      let led = new five.Led(13);
      led.on()
    })
  })
 
};

app.on('ready', createWindow)

app.on('all-window-closed', () => {
  app.quit()
});

