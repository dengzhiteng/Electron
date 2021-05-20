
var fs = require('fs'); 
window.onload = function(){
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function(){
        mybaby.innerHTML = 111

        // fs.readFile('xiaojiejie.txt',(err,data)=>{
        //     mybaby.innerHTML = data
        // })
    }
}