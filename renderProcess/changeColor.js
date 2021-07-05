const {ipcRenderer} = require("electron");
const selectColor = localStorage.getItem("selectColor");
document.querySelector(".result-text").style.color = selectColor;

ipcRenderer.on("doChangeCol", (e, msg) => {
  document.querySelector(".result-text").style.color = msg;
  localStorage.setItem("selectColor", msg);
});
