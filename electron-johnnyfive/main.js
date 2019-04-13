const { app, BrowserWindow, ipcMain } = require('electron')
const url = require('url');
const path = require('path');
const five = require('johnny-five');


const board = new five.Board()

  let win;
  const createWindow = () => {
    win = new BrowserWindow({});
    
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'src/index.html'),
      protocol: 'file',
      slashes: true,
    }));
    
    win.webContents.openDevTools();
  
    board.on('ready', () => {
      let led = new five.Led(13);
      ipcMain.on('turn-on', (event, arg) => {
        console.log('Hello World', arg)
        led.on();
      })
  
      ipcMain.on('turn-off', (event, arg) => {
        console.log('Hello World', arg)
        led.off();
      })
    })
  }
  
  app.on('ready', createWindow)
  
  app.on('all-window-closed', () => {
    app.quit();
  });




