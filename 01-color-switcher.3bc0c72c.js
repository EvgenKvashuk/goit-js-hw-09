!function(){var t=null;DELAY_VALUE=1e3;var n={body:document.querySelector("body"),startBtn:document.querySelector(".js-start"),stopBtn:document.querySelector(".js-stop")};n.startBtn.addEventListener("click",(function(){t=setInterval((function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}console.log(t()),n.body.style.backgroundColor=t()}),DELAY_VALUE)})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),console.log("Interval with id ".concat(t," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.3bc0c72c.js.map
