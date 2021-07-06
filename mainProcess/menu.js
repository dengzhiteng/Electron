const {Menu, dialog, app, BrowserWindow} = require("electron");
const path = require("path");

let template = [
  {
    label: "计算器",
    submenu: [
      {
        label: "关于",
        click: function () {
          const options = {
            width: 300,
            height: 400,
            url: path.join(__dirname, "../views/about.html"),
          };
          createWindow(options);
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
          // 用于判断平台
          // console.log(process.platform);
        },
      },
    ],
  },
  {
    label: "格式",
    submenu: [
      {
        label: "字体减小",
        accelerator: "F9",
        click: function (item, win) {
          win.webContents.send("doChangeFondSize", "reduce");
        },
      },
      {
        label: "字体增大",
        accelerator: "F10",
        click: function (item, win) {
          win.webContents.send("doChangeFondSize", "add");
        },
      },
      {
        label: "颜色",
        accelerator: "CmdOrCtrl+Shift+C",
        click: function () {
          const options = {
            width: 300,
            height: 100,
            url: path.join(__dirname, "../views/color.html"),
          };
          createWindow(options);
        },
      },
      {
        label: "默认字体",
        click: function (item, win) {
          win.webContents.send("doChangeFondSize", "reset");
        },
      },
    ],
  },
];
function createWindow(options) {
  const win = new BrowserWindow({
    width: options.width,
    height: options.height,
    title: options.title,
    backgroundColor: "#f1f1f1",
  });
  win.loadURL(options.url);
  win.show();
  win.setMenu(null);
  win.webContents.openDevTools();
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
