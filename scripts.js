let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
const ampmEl = document.getElementById("ampm");

setInterval(()=>{
  let curr = new Date();
  let ampm = "AM";
hrs.innerHTML = (curr.getHours() < 10 ? "0":"") + curr.getHours() - 12;
min.innerHTML = (curr.getMinutes() < 10 ? "0" : "") + curr.getMinutes();
sec.innerHTML =  (curr.getSeconds() < 10 ? "0" : "") + curr.getSeconds();

if(curr.getHours() >= 12){
  ampm = "PM";
}

hrs.style.color = (curr.getHours() >= 12 && curr.getHours() <= 18)? "lightgreen" : "lightblue";

min.style.color = (curr.getMinutes() % 5 === 0)? "yellow" : "aqua";

sec.style.color = (curr.getSeconds() % 2 === 0)? "black" : "white";

ampmEl.innerHTML = ampm;
},1000);
