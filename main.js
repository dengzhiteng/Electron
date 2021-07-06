const {app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");
//应用窗口
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 600,
    title: "前端-计算器",
    backgroundColor: "#f1f1f1",
    icon: "assets/images/icon.ico",
  });

  // 设置menu
  require("./mainProcess/menu.js");
  // 加载页面
  win.loadFile(path.join(__dirname, "./views/index.html"));
  // 打开调试窗口
  win.webContents.openDevTools();
  win.show();
}
app.on("ready", () => {
  createWindow();
});
app.on("close", (event) => {
  // 回到初始状态
  win = null;
  // 退出应用程序
  app.quit();
});

ipcMain.on("setColor_msg", (e, msg) => {
  //console.log(msg);
  //sender.send向渲染进程发送会发送到原来的那个渲染进程(原路返回)
  //webContents会发送到win这个窗体的渲染进程
  // e.sender.send("doChangeCol", msg);
  win.webContents.send("doChangeCol", msg);
});
