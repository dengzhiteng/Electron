const {app, BrowserWindow} = require("electron");
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "前端-计算器",
  });
  win.loadFile("index.html");
  // 打开调试窗口
  win.webContents.openDevTools();
}
app.on("ready", () => {
  createWindow();
});
