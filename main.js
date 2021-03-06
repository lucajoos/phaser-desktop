const { app, BrowserWindow } = require('electron');
if(require('electron-squirrel-startup')) return;

let client = require('./modules/client');

app.whenReady().then(() => {
  let window = new BrowserWindow({
    width: 1200,
    height: 830,

    minWidth: 820,
    minHeight: 600,

    frame: false,
    transparent: true,

    resizable: true,

    webPreferences: {
      nodeIntegration: true
    }
  });

  client(
      window
  );
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

require('update-electron-app')();
require('./modules/server')();