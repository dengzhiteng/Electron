const {Menu, Tray, BrowserWindow} = require("electron");
const path = require("path");
var win = BrowserWindow.getFocusedWindow();

let tray = new Tray(path.join(__dirname, "../assets/images/icon.ico"));
const contextMenu = Menu.buildFromTemplate([
  {
    label: "退出",
    click: function () {
      // 隐藏图标
      tray.destroy();
      // 销毁窗体
      win.destroy();
    },
  },
]);
tray.setToolTip("前端计算器");
tray.setContextMenu(contextMenu);

// 添加事件
tray.on("click", () => {
  // 切换显示与隐藏状态
  if (win.isVisible()) {
    win.hide();
    win.setSkipTaskbar(true);
  } else {
    win.show();
    win.setSkipTaskbar(false);
  }
});
