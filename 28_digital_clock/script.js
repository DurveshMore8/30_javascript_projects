let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML = currentTime.getHours().toString().padStart(2, "0");
  min.innerHTML = currentTime.getMinutes().toString().padStart(2, "0");
  sec.innerHTML = currentTime.getSeconds().toString().padStart(2, "0");
}, 1000);
