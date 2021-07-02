const {Menu, dialog, app, BrowserWindow} = require("electron");
const path = require("path");

let template = [
  {
    label: "格式",
    submenu: [
      {
        label: "字体减小",
        accelerator: "F9",
        click: function () {
          console.log("numsub");
        },
      },
      {
        label: "字体增大",
        accelerator: "F10",
        click: function () {
          console.log("numadd");
        },
      },
      {
        label: "颜色",
        accelerator: "CmdOrCtrl+Shift+C",
        click: function () {
          console.log("color");
        },
      },
      {
        label: "默认字体",
      },
    ],
  },
  {
    label: "帮助",
    submenu: [
      {
        label: "关于",
        click: function () {
          createWindow();
        },
      },
      {
        label: "退出",
        // role: "quit",
        accelerator: "Alt+F4",
        click: function (item, win, events) {
          dialog
            .showMessageBox({
              type: "info",
              buttons: ["确认", "取消"],
              message: "确认退出吗？",
            })
            .then((res) => {
              const {response} = res;
              if (response == 0) {
                // app.quit();
                win.destroy();
              }
            });
        },
      },
      {
        label: "最小化",
        accelerator: "Esc",
        role: "minimize",
        click: function () {
          console.log("Esc");
          // 用于判断平台
          console.log(process.platform);
        },
      },
    ],
  },
];

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    title: "前端-计算器",
    backgroundColor: "#f1f1f1",
  });
  // 加载页面
  win.loadFile(path.join(__dirname, "../views/about.html"));
  win.show();
  win.setMenu(null);
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
