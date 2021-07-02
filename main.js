const {app, BrowserWindow} = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    title: "前端-计算器",
    backgroundColor: "#f1f1f1",
  });

  // 设置menu
  require("./mainProcess/menu.js");
  // 加载页面
  win.loadFile(path.join(__dirname, "./views/index.html"));
  // 打开调试窗口
  // win.webContents.openDevTools();
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
