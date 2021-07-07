const {app, BrowserWindow, ipcMain, globalShortcut} = require("electron");
const path = require("path");
const {windowsStore} = require("process");
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 600,
    title: "前端-计算器",
    backgroundColor: "#f1f1f1",
    icon: "assets/images/icon.ico",
  });

  require("./mainProcess/menu.js");
  require("./mainProcess/tray.js");

  win.loadFile(path.join(__dirname, "./views/index.html"));
  win.show();
  win.on("close", (event) => {
    win.hide();
    event.preventDefault();
  });
}
app.on("ready", () => {
  createWindow();
  globalShortcut.register("CmdOrCtrl+F12", function () {
    win.webContents.openDevTools();
  });
});
ipcMain.on("setColor_msg", (e, msg) => {
  win.webContents.send("doChangeCol", msg);
});
