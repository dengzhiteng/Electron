const {ipcRenderer} = require("electron");
const selectColor = localStorage.getItem("selectColor");
document.querySelector(".result-text").style.color = selectColor;

ipcRenderer.on("doChangeCol", (e, msg) => {
  document.querySelector(".result-text").style.color = msg;
  localStorage.setItem("selectColor", msg);
});

ipcRenderer.on("doChangeFondSize", (e, msg) => {
  let sizePx = document.querySelector(".result-text").style.fontSize;
  let size = Number(sizePx.replace(/px/, ""));
  if (msg == "add") {
    size += 2;
  } else if (msg == "reduce") {
    size -= 2;
  } else if (msg == "reset") {
    size = 50;
    document.querySelector(".result-text").style.color = "white";
  }
  // 限定区间 [30,100]
  size = size > 100 ? 100 : size;
  size = size < 30 ? 30 : size;

  document.querySelector(".result-text").style.fontSize = size + "px";
});
