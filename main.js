// 主进程
const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow = null;// 声明要打开的窗口

app.on('ready', () => {
    mainWindow = new BrowserWindow({ 
        width: 1200,
        height: 800,
        webPreferences :{ nodeIntegration:true,devTools:true}
    })
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    })
})

