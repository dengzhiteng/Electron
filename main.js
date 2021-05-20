// 主进程
const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow = null;// 声明要打开的窗口

app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 300, height: 300 })

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
})

