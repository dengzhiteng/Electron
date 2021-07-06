const {ipcRenderer} = require("electron");
const {evaluate} = require("mathjs");

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
let equal = false;
let restText = "";
let restTextDom = document.querySelector(".result-text");
let main = {
  // 重置
  reset: function () {
    restText = "";
    restTextDom.innerHTML = 0;
  },
  // 运算符
  clickopt: function (opt) {
    switch (opt) {
      case "+/-":
        restText *= -1;
        break;
      case "%":
        restText = restText % 100;
        break;
      default:
        restText += opt;
        break;
    }
    restTextDom.innerHTML = restText;
  },
  // 数字
  clickNum: function (num) {
    // 处理小数点
    if (num == ".") {
      if (restText.indexOf(".") == -1) {
        restText += num;
      }
    } else {
      equal == false ? (restText += num) : (restText = num);
      equal = false;
    }
    restTextDom.innerHTML = restText;
  },
  // 计算
  calc: function () {
    equal = true;
    restText = evaluate(restText);
    restTextDom.innerHTML = restText;
  },
};
